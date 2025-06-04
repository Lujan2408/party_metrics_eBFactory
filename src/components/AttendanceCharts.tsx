import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useAppStore } from '../stores/useAppStore';
import { useChartConfig } from '../hooks/useChartConfig';

export default function AttendanceCharts() {

  const total = useAppStore(state => state.total)
  const { pieChartOptions, columnChartOptions } = useChartConfig()
  if (total === 0) {
    return (
      <div className="text-center text-gray-500 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
        <p>Add attendees to see the charts</p>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-2xl mx-auto mt-6 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={pieChartOptions}
          />
        </div>
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={columnChartOptions}
          />
        </div>
      </div>
    </div>
  );
} 