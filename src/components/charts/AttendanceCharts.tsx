import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useAppStore } from '../../stores/useAppStore';
import { useChartConfig } from '../../hooks/useChartConfig';

export default function AttendanceCharts() {
  
  const { total } = useAppStore()
  const { pieChartOptions, columnChartOptions } = useChartConfig()

  if (total === 0) {
    return (
      <div className="text-center text-gray-500 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
        <p>Add attendees to see the charts</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      <div className="space-y-8">
        <div className="w-full">
          <HighchartsReact
            highcharts={Highcharts}
            options={pieChartOptions}
          />
        </div>
        <div className="w-full">
          <HighchartsReact
            highcharts={Highcharts}
            options={columnChartOptions}
          />
        </div>
      </div>
    </div>
  );
} 