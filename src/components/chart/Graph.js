import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
 

  ChartJS.register(
    CategoryScale,
    LinearScale,
  BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Inventories (Units)',
        fontSize: 50
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', "September", "October", "November", "December"];

  const data = {
      labels,
      datasets: [
        {
            label: 'Purchases',
            backgroundColor: '#2196f3',
            borderColor: 'rgba(54, 162, 235, 0.6)',
            data: [ 200, 150, 300, 250, 300, 500, 400, 180, 250, 300, 400, 450],
      },
        {
            label: 'Sales',
            backgroundColor: '#f44336',
            borderColor: 'rgb(255, 99, 132, 0.5)',
            data: [ 150, 200, 200, 290, 350, 400, 400, 250, 250, 400, 550, 600],
        },

    ]
  }

export const BarChart = () => {
        
    return (
        <Bar data={data} options={options}/>
            
    )
}
