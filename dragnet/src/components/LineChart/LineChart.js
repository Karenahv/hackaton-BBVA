import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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

const LineGraph = (props) => {

    return (
      <LineChart
        width={900}
        height={450}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        title='índice de aprobación'
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="IA" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }


export default LineGraph
