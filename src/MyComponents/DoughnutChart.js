import React from 'react';
// import { Tooltip, Legend, Chart, ArcElement } from 'chart.js'
// import { Doughnut } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";
import CanvasJSReact from '../canvasjs.react';

export const DoughnutChart = () => {

    // var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
        animationEnabled: true,        
        exportEnabled: true,        
        theme: "dark1", // "light1", "dark1", "dark2"
        title: {
            text: "Trip Expenses",
            padding: 5
        },
        data: [{
            type: "doughnut",
            indexLabel: "{label}: {y}%",
            startAngle: -90,
            dataPoints: [
                { y: 20, label: "Airfare" },
                { y: 24, label: "Food & Drinks" },
                { y: 20, label: "Accomodation" },
                { y: 14, label: "Transportation" },
                { y: 12, label: "Activities" },
                { y: 10, label: "Misc" }
            ]
        }]
    }

    // Chart.register(ArcElement);
    // Chart.register(Legend);
    // Chart.register(Tooltip);
    // Chart.register(ChartDataLabels);

    // const data = {
    //     labels: ["Device 1", "Device 1", "Device 3", "Device 4", "Device 5", "Device 6"],
    //     datasets: [
    //         {
    //             data: [3, 4, 3, 1, 6, 5],
    //             backgroundColor: [
    //                 "red",
    //                 "blue",
    //                 "green",
    //                 "yellow",
    //                 "pink",
    //                 "orange"
    //                 // "#FF6384",
    //                 // "#36A2EB",
    //                 // "#FFCE56",
    //                 // "#db3d44",
    //                 // "#4257b2",
    //                 // "#FFCE56"
    //             ],
    //             hoverBackgroundColor: [
    //                 "white",
    //                 "white",
    //                 "white",
    //                 "white",
    //                 "white",
    //                 "white",
    //             ]
    //         }
    //     ]
    // };


    return (
        <div>
            <CanvasJSChart options={options}            />            
        </div>       

        // <div className='w-75 mx-auto'>
        //     <Doughnut data={data} />
        // </div>
    )
}
