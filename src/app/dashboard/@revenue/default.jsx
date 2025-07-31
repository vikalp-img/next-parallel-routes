
import BarChartFunction from "@/components/BarChart";

const dataForBarChart = [
  { month: 'Jan', newUsers: 50 , activeUsers:27 },
  { month: 'Feb', newUsers: 60 },
  { month: 'Mar', newUsers: 80 },
  { month: 'Apr', newUsers: 100 },
  { month: 'May', newUsers: 90 },
  {month:'June',newUsers:120},
];

export default function revenue() {
    return (
        <div><BarChartFunction title={'Revenue by Month'} data={dataForBarChart} layout='vertical' /></div>
    )
}