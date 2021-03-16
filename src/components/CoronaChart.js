import React from 'react';
import Moment from 'moment';
import 'moment/locale/tr';
import CanvasJSReact from '../assets/canvasjs.react';
const CoronaChart = ({ list, daily_cases, deaths, recovered_cases }) => {
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    animationEnabled: true,
    title: {
      text: 'Gün Bazlı İstatistikler',
    },
    axisY: {
      title: 'Kişi Sayısı',
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: 'spline',
        name: 'Günlük Vaka',
        showInLegend: true,
        dataPoints: [
          { y: daily_cases[10], label: Moment(list[10].Date).format('DD MMM') },
          { y: daily_cases[9], label: Moment(list[9].Date).format('DD MMM') },
          { y: daily_cases[8], label: Moment(list[8].Date).format('DD MMM') },
          { y: daily_cases[7], label: Moment(list[7].Date).format('DD MMM') },
          { y: daily_cases[6], label: Moment(list[6].Date).format('DD MMM') },
          { y: daily_cases[5], label: Moment(list[5].Date).format('DD MMM') },
          { y: daily_cases[4], label: Moment(list[4].Date).format('DD MMM') },
          { y: daily_cases[3], label: Moment(list[3].Date).format('DD MMM') },
          { y: daily_cases[2], label: Moment(list[2].Date).format('DD MMM') },
          { y: daily_cases[1], label: Moment(list[1].Date).format('DD MMM') },
          { y: daily_cases[0], label: Moment(list[0].Date).format('DD MMM') },
          //Moment.tz(Date, "Europe/Istanbul").format("DD MMM") can be used for timezone with moment-timezone
        ],
      },
      {
        type: 'spline',
        name: 'Günlük İyileşen',
        showInLegend: true,
        dataPoints: [
          {
            y: recovered_cases[10],
            label: Moment(list[10].Date).format('DD MMM'),
          },
          {
            y: recovered_cases[9],
            label: Moment(list[9].Date).format('DD MMM'),
          },
          {
            y: recovered_cases[8],
            label: Moment(list[8].Date).format('DD MMM'),
          },
          {
            y: recovered_cases[7],
            label: Moment(list[7].Date).format('DD MMM'),
          },
          {
            y: recovered_cases[6],
            label: Moment(list[6].Date).format('DD MMM'),
          },
          {
            y: recovered_cases[5],
            label: Moment(list[5].Date).format('DD MMM'),
          },
          {
            y: recovered_cases[4],
            label: Moment(list[4].Date).format('DD MMM'),
          },
          {
            y: recovered_cases[3],
            label: Moment(list[3].Date).format('DD MMM'),
          },
          {
            y: recovered_cases[2],
            label: Moment(list[2].Date).format('DD MMM'),
          },
          {
            y: recovered_cases[1],
            label: Moment(list[1].Date).format('DD MMM'),
          },
          {
            y: recovered_cases[0],
            label: Moment(list[0].Date).format('DD MMM'),
          },
          //Moment.tz(Date, "Europe/Istanbul").format("DD MMM") can be used for timezone with moment-timezone
        ],
      },
      {
        type: 'spline',
        name: 'Günlük Ölüm',
        showInLegend: true,
        dataPoints: [
          {
            y: deaths[10] - deaths[11],
            label: Moment(list[10].Date).format('DD MMM'),
          },
          {
            y: deaths[9] - deaths[10],
            label: Moment(list[9].Date).format('DD MMM'),
          },
          {
            y: deaths[8] - deaths[9],
            label: Moment(list[8].Date).format('DD MMM'),
          },
          {
            y: deaths[7] - deaths[8],
            label: Moment(list[7].Date).format('DD MMM'),
          },
          {
            y: deaths[6] - deaths[7],
            label: Moment(list[6].Date).format('DD MMM'),
          },
          {
            y: deaths[5] - deaths[6],
            label: Moment(list[5].Date).format('DD MMM'),
          },
          {
            y: deaths[4] - deaths[5],
            label: Moment(list[4].Date).format('DD MMM'),
          },
          {
            y: deaths[3] - deaths[4],
            label: Moment(list[3].Date).format('DD MMM'),
          },
          {
            y: deaths[2] - deaths[3],
            label: Moment(list[2].Date).format('DD MMM'),
          },
          {
            y: deaths[1] - deaths[2],
            label: Moment(list[1].Date).format('DD MMM'),
          },
          {
            y: deaths[0] - deaths[1],
            label: Moment(list[0].Date).format('DD MMM'),
          },
          //Moment.tz(Date, "Europe/Istanbul").format("DD MMM") can be used for timezone with moment-timezone
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};
export default CoronaChart;
