// App.js

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Box } from '@mui/material';

const ChartComponent = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        const chartConfig = {
            type: 'scatter', // Initial chart type
            data: {
                labels: ['May 30, 16:00', 'May 30, 20:00', 'May 31, 00:00', 'May 31, 04:00', 'May 31, 08:00'],
                datasets: [{
                    type: 'bar',
                    label: 'Bar Dataset',
                    data: [20, 40, 60, 30, 35],
                    order: 2
                }, {
                    type: 'line',
                    label: 'Line Dataset',
                    data: [5, 28, 65, 25, 2],
                    order: 1
                }],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        };

        // Create chart instance
        const chartInstance = new Chart(ctx, chartConfig);

        // Cleanup to destroy chart on unmount
        return () => {
            chartInstance.destroy();
        };
    }, []);

    return (
        <Box sx={{margin: '8px'}}>
            <canvas ref={canvasRef} />
        </Box>
    );
};

export default ChartComponent;
