import React, { useState } from 'react';
import CoronaCard from '../components/CoronaCard';
import CoronaChart from '../components/CoronaChart';
import { Consumer } from '../context';
import NumberFormat from 'react-number-format';
import Moment from 'react-moment';

const Corona = () => {
  const [count, setCount] = useState(6);
  return (
    <Consumer>
      {(value) => {
        const { corona_list, today, day_counter, daily_cases } = value;
        const reverse_corona_list = corona_list.slice(0).reverse();
        const reverse_daily_cases = daily_cases.slice(0).reverse();
        var reverse_deaths = [];
        reverse_corona_list.every(
          (item, index) => (reverse_deaths[index] = item.Deaths)
        );

        return (
          <div className="container">
            <p className="text-muted text-center px-5">
              * Veriler{' '}
              <a
                href="https://covid19api.com/"
                target="_blank"
                rel="noreferrer"
              >
                Covid19 API
              </a>{' '}
              tarafından sağlanmaktadır.
            </p>
            <div className="text-center today">
              <CoronaChart
                list={reverse_corona_list}
                daily_cases={reverse_daily_cases}
                deaths={reverse_deaths}
              />
            </div>
            <div className="text-center today">
              <h3 className="corona-card-header">Bugün {day_counter}. Gün</h3>
              <p>
                <i className="fas fa-calendar-day m-2"></i>Günlük Vaka:{' '}
                <NumberFormat
                  value={daily_cases[daily_cases.length - 1]}
                  displayType={'text'}
                  thousandSeparator={true}
                  renderText={(value) => (
                    <React.Fragment>{value}</React.Fragment>
                  )}
                />
              </p>
              <p>
                <i className="fas fa-virus m-2"></i>Aktif Vaka:{' '}
                <NumberFormat
                  value={today.Active}
                  displayType={'text'}
                  thousandSeparator={true}
                  renderText={(value) => (
                    <React.Fragment>{value}</React.Fragment>
                  )}
                />
              </p>
              <p>
                <i className="fas fa-plus m-2"></i>Toplam Vaka:{' '}
                <NumberFormat
                  value={today.Confirmed}
                  displayType={'text'}
                  thousandSeparator={true}
                  renderText={(value) => (
                    <React.Fragment>{value}</React.Fragment>
                  )}
                />
              </p>
              <p>
                <i className="fas fa-first-aid m-2"></i>İyileşen Vaka:{' '}
                <NumberFormat
                  value={today.Recovered}
                  displayType={'text'}
                  thousandSeparator={true}
                  renderText={(value) => (
                    <React.Fragment>{value}</React.Fragment>
                  )}
                />
              </p>
              <p>
                <i className="fas fa-heart-broken m-2"></i>Toplam Ölüm:{' '}
                <NumberFormat
                  value={today.Deaths}
                  displayType={'text'}
                  thousandSeparator={true}
                  renderText={(value) => (
                    <React.Fragment>{value}</React.Fragment>
                  )}
                />
              </p>
              <p>
                <i className="fas fa-calendar-week m-2"></i>Tarih:{' '}
                <Moment format="DD/MM/YYYY">{today.Date}</Moment>
              </p>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              {corona_list
                .slice(0)
                .reverse()
                .map((item, index) => {
                  return (
                    index < count && (
                      <CoronaCard
                        key={index}
                        active_case={item.Active}
                        confirmed_case={item.Confirmed}
                        deaths={item.Deaths}
                        recovered={item.Recovered}
                        date={item.Date}
                        day={corona_list.length - index - 1}
                        dailyCase={reverse_daily_cases[index]}
                      />
                    )
                  );
                })}
            </div>
            {count < corona_list.length && (
              <div
                className="arrow"
                onClick={() => setCount((prevValue) => prevValue + 10)}
              ></div>
            )}
          </div>
        );
      }}
    </Consumer>
  );
};
export default Corona;
