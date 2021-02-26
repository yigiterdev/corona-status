import React from "react";

const CoronaCard = ({
  active_case,
  confirmed_case,
  deaths,
  recovered,
  date,
  day,
  today,
}) => {
  return (
    <div className="col-md-5 corona-card text-center">
      <h3 className="corona-card-header">{day + 1}. Gün</h3>
      <p>
        <i className="fas fa-virus m-2"></i>Aktif Vaka: {active_case}
      </p>
      <p>
        <i className="fas fa-plus m-2"></i>Toplam Vaka: {confirmed_case}
      </p>
      <p>
        <i className="fas fa-first-aid m-2"></i>İyileşen Vaka: {recovered}
      </p>
      <p>
        <i className="fas fa-heart-broken m-2"></i>Toplam Ölüm: {deaths}
      </p>
      <p>
        <i className="fas fa-calendar-week m-2"></i>Tarih: {date}
      </p>
    </div>
  );
};
export default CoronaCard;
