import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useAppStore } from '../../stores/useAppStore';
import { formatCurrency } from '../../helpers/formatCurrency';

// Types for chart options
type ChartPoint = {
  value: number;
  color: string;
  series: {
    name: string;
  };
  y: number;
}

type ChartContext = {
  value: number;
}

export default function ExpenseCharts() {
  const { expensesByCategory, totalExpenses } = useAppStore();

  const pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      height: '280px',
      animation: {
        duration: 1000
      },
      style: {
        fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }
    },
    title: {
      text: 'Expenses Distribution',
      style: {
        color: '#4F46E5',
        fontWeight: 'bold'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b><br>Amount: <b>{point.custom.formattedAmount}</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            textOutline: 'none'
          }
        },
        showInLegend: true,
        animation: {
          duration: 1000
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Category',
      data: Object.entries(expensesByCategory).map(([category, amount], index) => ({
        name: category,
        y: amount,
        custom: {
          formattedAmount: formatCurrency(amount)
        },
        color: [
          '#4F46E5',  // Indigo
          '#EC4899',  // Pink
          '#10B981',  // Green
          '#F59E0B',  // Yellow
          '#6366F1',  // Blue
          '#8B5CF6'   // Purple
        ][index % 6]
      }))
    }]
  };

  const columnChartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      height: '280px',
      animation: {
        duration: 1000
      },
      style: {
        fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }
    },
    title: {
      text: 'Expenses by Category',
      style: {
        color: '#4F46E5',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: Object.keys(expensesByCategory),
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Amount'
      },
      labels: {
        formatter: function(this: ChartContext): string {
          return formatCurrency(this.value);
        }
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormatter: function(this: ChartPoint): string {
        return '<tr><td style="color:' + this.color + 
               ';padding:0">' + this.series.name + ': </td>' +
               '<td style="padding:0"><b>' + formatCurrency(this.y) + '</b></td></tr>';
      },
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        animation: {
          duration: 1000
        }
      }
    },
    series: [{
      type: 'column',
      name: 'Amount',
      data: Object.entries(expensesByCategory).map(([, amount], index) => ({
        y: amount,
        color: [
          '#4F46E5',  // Indigo
          '#EC4899',  // Pink
          '#10B981',  // Green
          '#F59E0B',  // Yellow
          '#6366F1',  // Blue
          '#8B5CF6'   // Purple
        ][index % 6]
      }))
    }]
  };

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