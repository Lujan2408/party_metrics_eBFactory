import Highcharts from 'highcharts';
import { formatCurrency } from '../helpers/formatCurrency';
import { useAppStore } from '../stores/useAppStore';

// Types for Highcharts formatters
type AxisFormatterContext = {
  value: number | string;
  axis?: Highcharts.Axis;
};

export const useExpenseChartConfig = () => {

  const { expensesByCategory } = useAppStore()

  // In the functions below we are setting the options for the charts.

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
        formatter: function(this: AxisFormatterContext): string {
          return formatCurrency(Number(this.value));
        }
      }
    },
    tooltip: {
      headerFormat: '<b>{point.key}</b><br/>',
      pointFormatter: function(): string {
        const point = this as unknown as { y: number; series: { name: string } };
        return point.series.name + ': <b>' + formatCurrency(point.y) + '</b>';
      },
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

  return {
    pieChartOptions,
    columnChartOptions
  }
}