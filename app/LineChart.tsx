'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!props.data) return;

    const canvas = chartRef.current;
    const ctx = canvas.getContext('2d');

    const labels = Object.keys(props.data);
    const values = Object.values(props.data).map(value => parseFloat(value));

    const lineChartData = {
      labels: labels,
      datasets: [
        {
          label: 'Earnings',
          data: values,
          borderColor: '#fff',
          pointRadius: 0,
          tension: 0.4,
        },
      ],
    };

    const chart = new Chart(ctx, {
      type: 'line',
      data: lineChartData,
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            enabled: true,
            intersect: false,
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
            },
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [props.data]);

  return <canvas ref={chartRef} style={{ height: `${props.height}`, zIndex: '2' }}></canvas>;
};

export default LineChart;
