import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import './styles.css'

const Radial = () => {
  const [valores, setValores] = useState({});
  const [series, setSeries] = useState([70]);
  const [options, setOptions] = useState({
    chart: {
      type: "radialBar"
    },
    responsive: [{
      breakpoint: undefined,
      options: {},
    }],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: ["Tarefas"],
  });

  return (
    <div class="chart-container">
      <div class="item">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height="200"
        />
      </div>

      <div class="item">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height="200"
        />
      </div>

      <div class="item">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height="200"
        />
      </div>
    </div>
  );
};

export default Radial;
