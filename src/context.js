import React, { Component } from 'react';
import axios from 'axios';
import { Spinner } from './components/Spinner';
const Context = React.createContext();
export class Provider extends Component {
  state = {
    isLoading: true,
    corona_list: [],
    today: [],
    day_counter: '',
    daily_cases: [],
    total_cases: '',
    vacine_list: [],
    vacine_day: [],
    countries:[],
    country:"Turkey"
  };
  async getCases() {
    const dailyCases = [];
    let temp = await localStorage.getItem("Country")
    var country = "Turkey"
    if(temp){
      country = temp
      this.setState({
        country:String(temp)
      })
    }
    await axios
      .get(`https://api.covid19api.com/total/dayone/country/${country}`)
      .then((res) => {
        this.setState({
          corona_list: res.data,
          today: res.data[res.data.length - 1],
          day_counter: res.data.length,
        });
        dailyCases.push(res.data[0].Confirmed);
        for (let i = 1; i < res.data.length; i++) {
          dailyCases.push(res.data[i].Confirmed - res.data[i - 1].Confirmed);
        }
        this.setState({
          daily_cases: dailyCases,
        });
        this.setState({ isLoading: false });
      })
      .catch((err) => console.log(err));
  }
  async getVaccines() {

    let temp = await localStorage.getItem("Country")
    var country = "turkey"
    if(temp){
      country = temp
      this.setState({
        country:String(temp)
      })
    }

    await axios
      .get(
        `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${country}?lastdays=10`
      )
      .then((res) => {
        this.setState({
          vacine_list: Object.values(res.data.timeline),
          vacine_day: Object.keys(res.data.timeline),
        });
      });
  }

  async getCountries(){
    await axios
      .get(
        `https://api.covid19api.com/countries`
      )
      .then((res) => {
        this.setState({
          countries: res.data
        });
      });
  }

  componentDidMount() {
    this.getCases();
    this.getVaccines();
    this.getCountries()
  }

  render() {
    const { isLoading } = this.state;
    //TODO: In future this can be replaced with dynamic loading page.
    if (isLoading) {
      return <Spinner />;
    }
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
