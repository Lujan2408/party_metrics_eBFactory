import { useAppStore } from "../stores/useAppStore";

export const useChartConfig = () => {
  
  const { men, women, children } = useAppStore();
  
  const pieChartOptions = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      height: '300px',
      animation: {
        duration: 1000
      },
      style: {
        fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }
    },
    title: {
      text: 'Attendance Distribution',
      style: {
        color: '#4F46E5',
        fontWeight: 'bold'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
      name: 'Attendees',
      colorByPoint: true,
      data: [
        {
          name: 'Men',
          y: men,
          color: '#4F46E5'
        },
        {
          name: 'Women',
          y: women,
          color: '#EC4899'
        },
        {
          name: 'Children',
          y: children,
          color: '#10B981'
        }
      ]
    }]
  };

  const columnChartOptions = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      height: '300px',
      animation: {
        duration: 1000
      },
      style: {
        fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }
    },
    title: {
      text: 'Attendance by Category',
      style: {
        color: '#4F46E5',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: ['Men', 'Women', 'Children'],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of Attendees'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
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
      name: 'Attendees',
      data: [
        {y: men, color: '#4F46E5'},
        {y: women, color: '#EC4899'},
        {y: children, color: '#10B981'}
      ]
    }]
  };

  return { 
    pieChartOptions, 
    columnChartOptions 
  }
}