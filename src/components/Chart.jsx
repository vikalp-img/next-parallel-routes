"use client"; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function Chart({title,data}) {

    const keys=Object.keys(data[0]);
    console.log(keys,'Chrtkeys');


  return (
    <div className="bg-gray-800 p-4 rounded shadow text-white">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey={`${keys[0]}`} stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
          <Legend />
          {/*                   dataKey= match the key in the data we are passing through props                  */}
          <Line type="monotone" dataKey={`${keys[1]}`} stroke="#8884d8" name="Total Users" />
          <Line type="monotone" dataKey={`${keys[2]}`} stroke="#82ca9d" name="Active Users" />
          <Line type="monotone" dataKey={`${keys[3]}`} stroke="#ffc658" name="New Users" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
