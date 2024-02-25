import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from 'axios';

export const options = {
  title: "Pörssisähkön hinta, 7vk [c/kWh]",
  width: 1600,
  height: 800,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
};

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/data")
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data from the server:', error.message);
    });
  }, []);

  console.log('data: ', data);

   return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  ); 
}

