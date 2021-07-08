import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import './charts.css';

const Chart = () => {

    return (
        <div>
            <p>Bar Chart</p>
            <Doughnut 
                // height={200}
                // width={200}
                data={{
                    labels: ['Coin1', 'Coin2', 'Coin3', 'Coin4', 'Coin5'],
                    datasets: [{
                        label: 'My Portfolio',
                        data: [3, 1.2, 13, 4, 3],
                        backgroundColor: [
                            'rgb(0, 153, 0, 0.2)',
                            'rgb(0, 128, 10, 0.2)',
                            'rgb(72, 192, 19, 0.2)',
                            'rgb(80, 153, 80, 0.2)',
                            'rgb(20, 153, 100, 0.2)'
                        ],
                        hoverBorderWidth: 5,
                        hoverOffset: 6
                    }]
                }}
                options={{
                    layout: {
                        padding: 100
                    },
                    plugins: {
                        title: {
                            display: true,
                            font: {
                                size: 22
                            },
                            text: 'Coin Distribution'
                        }
                    }
                }}
            />

            <Line 
                data = {{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', "Sep", 'Oct', 'Nov', 'Dec'],
                  datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                  }]
                }}
                options={{
                    layout: {
                        padding: 100
                    }
                }}
            />

        </div>
    )
};

export default Chart;