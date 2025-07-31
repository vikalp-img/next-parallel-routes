import AreaChartFunction from '@/components/AreaChartFunction'
import React from 'react'

const dataForAreaChart = [
  { month: 'Jan', users: 112 },
  { month: 'Feb', users: 192 },
  { month: 'Mar', users: 126 },
  { month: 'Apr', users: 238 },
  { month: 'May', users: 169 },
  { month: 'Jun', users: 215 },
  { month: 'Jul', users: 296 },
];
export default function DefaultProduct() {
    return (
        <div><AreaChartFunction title={'Products Sold'} data={dataForAreaChart} /></div>
    )
}