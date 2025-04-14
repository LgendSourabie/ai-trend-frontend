export default {
  graphics: [
    {
      id: 'trl-description',
      type: 'text',
      left: 'center',
      bottom: 0,
      style: {
        text: 'TLR = Technology Readiness Level',
        font: '14px sans-serif',
        fill: '#888',
      },
    },
    {
      id: 'trl-pilot',
      type: 'text',
      left: 'right',
      top: '0',
      style: {
        text: 'Pilot (TRL 1-3)',
        fill: 'rgba(0, 170, 0, 1)',
        font: 'bold 14px sans-serif',
      },
    },
    {
      id: 'trl-development',
      type: 'text',
      left: 'right',
      top: '5%',
      style: {
        text: 'Development (TRL 4-6)',
        fill: 'rgba(255, 170, 0, 1)',
        font: 'bold 14px sans-serif',
      },
    },
    {
      id: 'trl-deploy',
      type: 'text',
      left: 'right',
      top: '10%',
      style: {
        text: 'Deploy (TRL 7-9)',
        fill: 'rgba(0, 119, 255, 1)',
        font: 'bold 14px sans-serif',
      },
    },
  ],
  circleLineColor: [
    'rgba(0, 170, 0, 0.3)',
    'rgba(0, 170, 0, 0.3)',
    'rgba(0, 170, 0, 0.3)',
    'rgba(0, 170, 0, 0.3)',
    'rgba(255, 170, 0, 0.3)',
    'rgba(255, 170, 0, 0.3)',
    'rgba(255, 170, 0, 0.3)',
    'rgba(0, 119, 255, 0.3)',
    'rgba(0, 119, 255, 0.3)',
    'rgba(0, 119, 255, 1)',
  ],
  chartOptions(chartData, graphics, indicators, chartShape) {
    return {
      legend: {
        data: ['Macrotrends'],
      },
      graphic: graphics,
      radar: {
        shape: chartShape,
        splitNumber: 9,
        radius: '75%',
        indicator: indicators,
        axisName: {
          color: 'black',
        },
        splitLine: {
          lineStyle: {
            color: this.circleLineColor,
          },
        },
        axisLabel: {
          show: true,
          fontSize: 11,
          color: '#555',
          formatter: (value, index) => {
            if (index == 3) {
              return `TRL ${index}`;
            } else if (index == 6) {
              return `TRL ${index}`;
            } else if (index == 9) {
              return `TRL ${index}`;
            }
          },
        },
      },
      series: [
        {
          name: 'Trend Information',
          type: 'radar',

          data: [
            {
              value: chartData,
              name: 'Macrotrends',
              areaStyle: {
                color: 'rgba(34, 139, 230, 0.4)',
              },
              symbolSize: 12,
              label: {
                show: true,
                color: 'rgba(34, 139, 230, 1)',
                formatter: function (params) {
                  return params.value;
                },
              },
            },
          ],
        },
      ],
    };
  },
};
