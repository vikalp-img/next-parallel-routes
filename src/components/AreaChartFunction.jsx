"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




export default function AreaChartFunction({title,data}) {
    const keys = Object.keys(data[0]);
  return (
    <div className="bg-gray-800 p-4 rounded shadow text-white">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#00C49F" stopOpacity={0}/>
            </linearGradient>
            {/*  Can add second line also using this , we have to change id as well stop color  */}
            <linearGradient id="colorUsers2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4F6BED" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#4F6BED" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey={`${keys[0]}`} stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
          <Area type="monotone" dataKey={`${keys[1]}`} stroke="#00C49F" fillOpacity={1} fill="url(#colorUsers)" />
          {/*   And here we added the second line */}
          <Area type="monotone" dataKey={`${keys[2]}`} stroke="#4F6BED" fillOpacity={1} fill="url(#colorUsers2)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
