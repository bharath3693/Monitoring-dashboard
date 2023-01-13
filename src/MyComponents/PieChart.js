import React from 'react';
import { Tooltip,  Legend, Chart, ArcElement } from 'chart.js'
import {  Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

export const PieChart = () => {
    Chart.register(ArcElement);
    Chart.register(Legend);
    Chart.register(Tooltip);
    Chart.register(ChartDataLabels);
    Chart.defaults.color = 'white';

    const data = {
        labels: ["Device 1", "Device 1", "Device 3", "Device 4", "Device 5", "Device 6"],        
        color:'white',
        datasets: [
            {
                data: [3, 4, 3, 1, 6, 5],                
                backgroundColor: [
                    "#a10505",
                    "#0a2978",
                    "#068012",
                    "#bdaa04",
                    "#bd0473",
                    "#bd4e04"
                    // "#FF6384",
                    // "#36A2EB",
                    // "#FFCE56",
                    // "#db3d44",
                    // "#4257b2",
                    // "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "white",
                    "white",
                    "white",
                    "white",
                    "white",
                    "white",
                ]
            }
        ]
    };


    return (
        <div className='w-75 mx-auto'>
            <Pie data={data} />            
        </div>
    );
}
