import React, {useEffect, useState} from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './LineChart.scss'

// const data = [
//     {
//         name: 'Lunes', IA: 4000,
//     },
//     {
//         name: 'Martes', IA: 3000,
//     },
//     {
//         name: 'Miercoles', IA: 2000,
//     },
//     {
//         name: 'Jueves', IA: 2780,
//     },
//     {
//         name: 'Viernes', IA: 1890,
//     },
//     {
//         name: 'Sábado', IA: 2390,
//     },
//     {
//         name: 'Domingo', IA: 3490,
//     },
// ];
const URL_BASE = 'https://d811e445999a.ngrok.io'
const LineGraph = (props) => {

    const [data1, setData1] = useState(null)
    const dia = useState(new Date().getDate())
    const mes = useState(new Date().getMonth())
    const year = useState(new Date().getFullYear())
    const [bestTweet, setBestTweet] = useState(null)
    const diaok = dia && dia[0]
    const mesok = mes && mes[0]
    const yearok = year && year[0]

    useEffect(() => {
        debugger;
        async function getScoreWeek(diaok, mesok, yearok) {
            const request = await fetch(`${URL_BASE}/tweet/get_week_scores/${yearok}-10-${diaok}`, {

                method: 'GET'
            });

            const json = await request.json();
            setData1(json)
            debugger;

        }

        getScoreWeek(diaok, mesok, yearok)

    }, [diaok, mesok, yearok])
    let data2 = []
    debugger;
    if (Array.isArray(data1)) {
        for (let i = 1; i < data1.length; i++) {
            data2.push( {
                name: data1[i].created_at,
                IA: data1[i].total_score
            })

        }
    }
    console.log(data2)
    return (
        <LineChart
            width={900}
            height={450}
            data={data2}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
            title='índice de aprobación'
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey="IA" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
    );
}


export default LineGraph
