"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function BarChartFunction({title,data, layout=''}) {
    const keys = Object.keys(data[0]);
    console.log(keys,'keys');
    
  return (
    <div className="bg-gray-800 p-4 rounded shadow text-white">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {layout=='vertical' ? 
            <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout='vertical' >
            {/* Grids Showing behind */}
          {/* <CartesianGrid strokeDasharray="3 3" stroke="#555" /> */}
          <XAxis type='number' stroke="#ccc" />
          <YAxis dataKey={`${keys[0]}`} type='category' stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
          <Legend />
          <Bar dataKey="newUsers" fill="#4F6BED" name="New Users" />
          {/*  Add Bar as you want as per the key present in data */}
          {/*      fill = color code */}
          <Bar dataKey="activeUsers" fill="#F6C667" name="Active Users" />
        </BarChart>
      </ResponsiveContainer>
      :
        <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} >
            {/* Grids Showing behind */}
          {/* <CartesianGrid strokeDasharray="3 3" stroke="#555" /> */}
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis  stroke="#ccc"  />
          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
          <Legend />
          <Bar dataKey="newUsers" fill="#8884d8" name="New Users" />
          {/*  Add Bar as you want as per the key present in data */}
          {/*      fill = color code */}
          <Bar dataKey="activeUsers" fill="#82ca9d" name="Active Users" />
        </BarChart>
      </ResponsiveContainer>    
}
    </div>
  );
}
