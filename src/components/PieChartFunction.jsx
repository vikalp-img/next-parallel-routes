"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';



// const COLORS = ['#00C49F', '#8884d8', '#FF6F61'];

export default function ModernPieChart({title,data, COLORS}) {
    const keys = Object.keys(data[0]);

  return (
    <div className="bg-gray-800 p-4 rounded shadow text-white">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey={`${keys[1]}`}
            cx="50%" 
            cy="50%"
            outerRadius={90}
            innerRadius={50}      // donut effect
            stroke="none"
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`} 
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={5} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#222', border: 'none' }}
            itemStyle={{ color: '#ddd' }}
          />
          {/* <Legend /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
