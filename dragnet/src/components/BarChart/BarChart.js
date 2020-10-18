import React, {PureComponent, useEffect, useState} from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {URL_BASE} from "../../api";


const data = [
    {
        name: 'Lunes', IA: 4000,
    },
    {
        name: 'Martes', IA: 3000,
    },
    {
        name: 'Miercoles', IA: 2000,
    },
    {
        name: 'Jueves', IA: 2780,
    },
    {
        name: 'Viernes', IA: 1890,
    },
    {
        name: 'Sábado', IA: 2390,
    },
    {
        name: 'Domingo', IA: 3490,
    },
];

const BarChart1 = () => {

    const [words, setWords] = useState([])
    const dia = useState(new Date().getDate())
    const mes = useState(new Date().getMonth())
    const year = useState(new Date().getFullYear())
    const diaok = dia && dia[0]
    const mesok = mes && mes[0]
    const yearok = year && year[0]
    // console.log(<Moment
    //                                             format="MMM DD YYYY">{moment.utc(fecha).locale('es')}</Moment>)

    useEffect(() => {

        async function getKeywordsScore(diaok, mesok, yearok) {
            const request = await fetch(`${URL_BASE}/tweet/get_keyword_scores/${yearok}-10-${diaok}`, {

                method: 'GET'
            });

            const json = await request.json();
            setWords(json)
        }

        getKeywordsScore(diaok, mesok, yearok)

    }, [diaok, mesok, yearok])

    let data2 = []
    if (Array.isArray(words)) {
        for (let i = 1; i < words.length; i++) {
            data2.push( {
                name: words[i].word,
                IA: words[i].score
            })

        }
    }

    return (
      <BarChart
        width={1500}
        height={300}
        data={data2}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="IA" fill="#8884d8" />
      </BarChart>
    );
}

export default BarChart1