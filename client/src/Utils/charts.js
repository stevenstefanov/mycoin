import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import './charts.css';


const Chart = () => {

    const [coinGecko, setCoinGecko] = useState([])
    const [userCoins, setUserCoins] = useState([])
    const [fullUserData, setFullUserData] = useState([])

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                axios
                    .get('/api/coins/')
                    .then(res => {
                        setUserCoins(res.data)
                    })
                    .catch(error => console.log(error))
                setCoinGecko(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if (userCoins.length > 0) {
            const data = userCoins.map(coin => {
                const match = coinGecko.filter(cg => cg.symbol === coin.symbol.toLowerCase())[0]
                const obj = {
                    ...coin,
                    image: match.image,
                    price: match.current_price
                }
                return obj
            })
            setFullUserData(data)
        }
    }, [userCoins])

    const assetValues = fullUserData.map(data => {
        return(
                parseFloat(data.price*data.holdings).toFixed(2))
    })

    const assetNames = fullUserData.map(data => {
        return(
                data.symbol, 
                data.asset
        )
    })

    return (
        <div className="chart-size donut">
            <Doughnut
                data={{
                    labels: assetNames,
                    datasets: [{
                        label: 'My Portfolio',
                        data: assetValues,
                        backgroundColor: [
                            'rgb(51, 95, 70, 0.6)',
                            'rgb(79, 155, 112, 0.6)',
                            'rgb(120, 240, 140, 0.6)',
                            'rgb(45, 206, 72, 0.6)',
                            'rgb(110, 151, 117, 0.6)',
                            'rgb(144, 208, 172, 0.6)',
                            'rgb(9, 209, 96, 0.6)',
                            'rgb(2, 90, 40, 0.6)',
                            'rgb(44, 88, 63, 0.6)',
                            'rgb(191, 228, 207, 0.6)',
                            'rgb(53, 132, 66, 0.6)',
                            'rgb(35, 148, 54, 0.6)',
                            'rgb(81, 145, 109, 0.6)',
                            'rgb(56, 172, 107, 0.6)',
                            'rgb(120, 139, 67, 0.6)',
                            'rgb(78, 129, 100, 0.6)',
                            'rgb(136, 219, 172, 0.6)',
                            'rgb(72, 193, 125, 0.6)',
                            'rgb(0, 236, 102, 0.6)',
                            'rgb(0, 202, 88, 0.6)',
                            'rgb(22, 70, 30, 0.6)',
                            'rgb(0, 145, 73, 0.6)',
                            'rgb(119, 176, 128, 0.6)',
                            'rgb(38, 195, 64, 0.6)',
                            'rgb(27, 111, 41, 0.6)',
                            'rgb(12, 75, 22, 0.6)',
                            'rgb(5, 169, 32, 0.6)',
                            'rgb(79, 142, 36, 0.6)',
                            'rgb(123, 185, 82, 0.6)',
                            'rgb(88, 166, 35, 0.6)'
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
                            text: 'Portfolio Breakdown'
                        }
                    }
                }}
            />
        </div>
    )
};

export default Chart;