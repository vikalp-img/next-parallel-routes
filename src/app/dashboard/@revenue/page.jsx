import BarChartFunction from '@/components/BarChart'
import Link from 'next/link'
import React from 'react'

const dataForBarChart = [
  { month: 'Jan', newUsers: 50 , activeUsers:27 },
  { month: 'Feb', newUsers: 60 },
  { month: 'Mar', newUsers: 80 },
  { month: 'Apr', newUsers: 100 },
  { month: 'May', newUsers: 90 },
  {month:'June',newUsers:120},
];
function page() {
  return (
    <>
    <div>Revenue page</div>
    <Link href="/dashboard/full-report" className='text-blue-400 text-sm font-medium'>See Full Report</Link>
    <BarChartFunction title={'Revenue by Month'} data={dataForBarChart} layout='vertical' />
    </>
  )
}

export default page