'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface LineChartProps {
    data: {
        months: string[];
        impressions: number[];
        clicks: number[];
        orders: number[];
    };
    selectedMetric: 'Impressions' | 'Clicks' | 'Orders';
    height: string;
}

const GigPerformanceChart: React.FC<LineChartProps> = (props) => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!props.data) return;

        const canvas = chartRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const { months, impressions, clicks, orders } = props.data;

        const lineChartData = {
            labels: months,
            datasets: [
                ...(props.selectedMetric === 'Impressions' ? [{
                    label: 'Impressions',
                    data: impressions,
                    borderColor: '#ffffff',
                    pointRadius: 0,
                    tension: 0.4,
                }] : []),
                ...(props.selectedMetric === 'Clicks' ? [{
                    label: 'Clicks',
                    data: clicks,
                    borderColor: '#ffffff',
                    pointRadius: 0,
                    tension: 0.4,
                }] : []),
                ...(props.selectedMetric === 'Orders' ? [{
                    label: 'Orders',
                    data: orders,
                    borderColor: '#ffffff',
                    pointRadius: 0,
                    tension: 0.4,
                }] : []),
            ],
        };

        const chart = new Chart(ctx, {
            type: 'line',
            data: lineChartData,
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        enabled: false,
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
                        display: true,
                        grid: {
                            display: false,
                        },
                        ticks: {
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
    }, [props.data, props.selectedMetric]);

    return <canvas ref={chartRef} style={{ height: props.height, zIndex: '2' }}></canvas>;
};

export default GigPerformanceChart;
