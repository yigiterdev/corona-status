import React, { Component } from "react";
import CoronaCard from "./components/CoronaCard";
import { Consumer } from "./context";

class Corona extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { corona_list, heading, today, day_counter } = value;
          return (
            <div className="container">
              <h1 className="m-4">
                <i className="fas fa-virus m-2"></i>
                {heading}
              </h1>
              <p className="text-muted p-4">
                * Bu sayılar 11 Mart'dan itibaren toplanarak elde edilmiştir.
                Günlük vaka sayıları değildir.
              </p>
              <div className="text-center today">
                <h3 className="corona-card-header">Bugün {day_counter}. Gün</h3>
                <p>
                  <i className="fas fa-virus m-2"></i>Aktif Vaka: {today.Active}
                </p>
                <p>
                  <i className="fas fa-plus m-2"></i>Toplam Vaka:{" "}
                  {today.Confirmed}
                </p>
                <p>
                  <i className="fas fa-first-aid m-2"></i>İyileşen Vaka:{" "}
                  {today.Recovered}
                </p>
                <p>
                  <i className="fas fa-heart-broken m-2"></i>Toplam Ölüm:{" "}
                  {today.Deaths}
                </p>
                <p>
                  <i className="fas fa-calendar-week m-2"></i>Tarih:{" "}
                  {today.Date}
                </p>
              </div>
              <div className="row  d-flex justify-content-center align-items-center">
                {corona_list.map((item, index) => {
                  return (
                    <CoronaCard
                      key={index}
                      active_case={item.Active}
                      confirmed_case={item.Confirmed}
                      deaths={item.Deaths}
                      recovered={item.Recovered}
                      date={item.Date}
                      day={index}
                    />
                  );
                })}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Corona;
