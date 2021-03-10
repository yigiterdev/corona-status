import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
export class Provider extends Component {
  state = {
    corona_list: [],
    today: [],
    day_counter: "",
    daily_cases: [],
    total_cases: "",
    vacine_list: [],
    vacine_day: [],
  };
  componentDidMount() {
    this.getCases();
    this.getVaccines();
  }
  getCases() {
    const dailyCases = [];
    axios
      .get("https://api.covid19api.com/total/dayone/country/turkey")
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
      })
      .catch((err) => console.log(err));
  }
  getVaccines() {
    axios
      .get(
        "https://disease.sh/v3/covid-19/vaccine/coverage/countries/turkey?lastdays=10"
      )
      .then((res) => {
        this.setState({
          vacine_list: Object.values(res.data.timeline),
          vacine_day: Object.keys(res.data.timeline),
        });
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
