import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
 

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
  LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Inventories (Amount)',
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
            data: [1000, 1300, 2000, 1700, 3000, 4500, 2500, 4500, 5000, 4000, 3000, 5000]
      },
      {
        label: 'Sales',
        backgroundColor: '#f44336',
        borderColor: 'rgb(255, 99, 132, 0.5)',
        data: [5000, 4500, 4000, 1500, 2000, 3000, 4000, 3000, 2000, 1000, 5500, 7000],
  },

    ]
  }

export const Lines = () => {
        
    return (
        <Line className='lines' data={data} options={options}/>
            
    )
}
