import AreaChartFunction from '@/components/AreaChartFunction'
import BarChartFunction from '@/components/BarChart'
import Chart from '@/components/Chart'
import PieChartFunction from '@/components/PieChartFunction'
import Link from 'next/link'
import React from 'react'

const dataForChart = [
  { month: 'Jan', total: 400, active: 240, new: 50 },
  { month: 'Feb', total: 450, active: 260, new: 60 },
  { month: 'Mar', total: 500, active: 280, new: 80 },
  { month: 'Apr', total: 600, active: 300, new: 100 },
  { month: 'May', total: 700, active: 320, new: 90 },
];
const dataForBarChart = [
  { month: 'Jan', newUsers: 50 , activeUsers:27 },
  { month: 'Feb', newUsers: 60 },
  { month: 'Mar', newUsers: 80 },
  { month: 'Apr', newUsers: 100 },
  { month: 'May', newUsers: 90 },
  {month:'June',newUsers:120},
];

const dataForPie = [
  { name: 'Active Users', value: 320 },
  { name: 'Inactive Users', value: 380 },
  { name: 'New Users', value: 50 },
];

const COLORS = ['#00C49F', '#8884d8', '#FF6F61', '#F6C667', '#4F6BED'];

const dataForAreaChart = [
  { month: 'Jan', users: 120 , product:47 },
  { month: 'Feb', users: 200 , product:57 },
  { month: 'Mar', users: 150 , product:42 },
  { month: 'Apr', users: 278 , product:64 },
  { month: 'May', users: 189 },
  { month: 'Jun', users: 239 },
  { month: 'Jul', users: 349 },
];

function page() {
  return (
    <div>
        
        <Chart title={'Users Overview'} data={dataForChart} />
        {/* <BarChartFunction title={'Users by Month'} data={dataForBarChart} /> 
        <PieChartFunction title={'Users Overview'} data={dataForPie} COLORS={COLORS} />
        <AreaChartFunction title={'Area Chart'} data={dataForAreaChart} /> */}
        <Link href="/dashboard/user-analytics" className="text-blue-400 text-sm font-medium ">See Full User Report</Link>

    </div>
  )
}

export default page