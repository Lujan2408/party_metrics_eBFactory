// This component is only used to display the charts for the expenses
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useAppStore } from '../../stores/useAppStore';
import { useExpenseChartConfig } from '../../hooks/useExpenseChartConfig';

export default function ExpenseCharts() {
  const { totalExpenses } = useAppStore();
  const { pieChartOptions, columnChartOptions } = useExpenseChartConfig();

  if (totalExpenses === 0) {
    return (
      <div className="text-center text-gray-500 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
        <p>Add expenses to see the charts</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-6">
      <div className="space-y-6">
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