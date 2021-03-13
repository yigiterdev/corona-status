import React from 'react';
import { Consumer } from '../context';
import NumberFormat from 'react-number-format';
import Moment from 'react-moment';
const Vaccine = () => {
  return (
    <Consumer>
      {(value) => {
        const { vacine_list, vacine_day } = value;
        const reverse_vaccine = vacine_day.slice(0).reverse();
        return (
          <div className="container">
            <h1 className="corona-card-header text-center">
              Son 10 günde ulaşılan aşı miktarı
            </h1>
            <p className="text-muted text-center px-5">
              * Veriler{' '}
              <a href="https://disease.sh/" target="_blank" rel="noreferrer">
                disease.sh
              </a>{' '}
              tarafından sağlanmaktadır. Toplam uygulanan 1.doz ve 2.doz
              miktarları verilmiştir. Aşı uygulanan kişi sayısı değildir.
            </p>
            <div className="row d-flex justify-content-center align-items-center">
              {vacine_list
                .slice(0)
                .reverse()
                .map((item, index) => {
                  return (
                    <div key={index} className="today text-center col-md-5">
                      <strong>Ülke: </strong>
                      Türkiye 🇹🇷
                      <br />
                      <i className="fas fa-calendar-day m-2"></i>
                      <strong>Tarih: </strong>
                      <Moment format="DD/MM/YYYY">
                        {reverse_vaccine[index]}
                      </Moment>
                      <p>
                        <i className="fas fa-virus-slash m-2"></i>
                        <strong>Ulaşılan Aşı Miktarı: </strong>
                        <NumberFormat
                          value={item}
                          displayType={'text'}
                          thousandSeparator={true}
                          renderText={(value) => (
                            <React.Fragment>{value}</React.Fragment>
                          )}
                        />
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Vaccine;
