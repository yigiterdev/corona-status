import React from 'react';
import NumberFormat from 'react-number-format';
import Moment from 'react-moment';
const CoronaCard = ({
  active_case,
  confirmed_case,
  deaths,
  recovered,
  date,
  day,
  today,
  dailyCase,
}) => {
  return (
    <div className="col-md-5 corona-card text-center">
      <h3 className="corona-card-header">{day + 1}. Gün</h3>
      <p>
        <i className="fas fa-calendar-day m-2"></i>Günlük Vaka:{' '}
        <NumberFormat
          value={dailyCase}
          displayType={'text'}
          thousandSeparator={true}
          renderText={(value) => <React.Fragment>{value}</React.Fragment>}
        />
      </p>
      <p>
        <i className="fas fa-virus m-2"></i>Aktif Vaka:{' '}
        <NumberFormat
          value={active_case}
          displayType={'text'}
          thousandSeparator={true}
          renderText={(value) => <React.Fragment>{value}</React.Fragment>}
        />
      </p>
      <p>
        <i className="fas fa-plus m-2"></i>Toplam Vaka:{' '}
        <NumberFormat
          value={confirmed_case}
          displayType={'text'}
          thousandSeparator={true}
          renderText={(value) => <React.Fragment>{value}</React.Fragment>}
        />
      </p>
      <p>
        <i className="fas fa-first-aid m-2"></i>İyileşen Vaka:{' '}
        <NumberFormat
          value={recovered}
          displayType={'text'}
          thousandSeparator={true}
          renderText={(value) => <React.Fragment>{value}</React.Fragment>}
        />
      </p>
      <p>
        <i className="fas fa-heart-broken m-2"></i>Toplam Ölüm:{' '}
        <NumberFormat
          value={deaths}
          displayType={'text'}
          thousandSeparator={true}
          renderText={(value) => <React.Fragment>{value}</React.Fragment>}
        />
      </p>
      <p>
        <i className="fas fa-calendar-week m-2"></i>Tarih:{' '}
        <Moment format="DD/MM/YYYY">{date}</Moment>
      </p>
    </div>
  );
};
export default CoronaCard;
