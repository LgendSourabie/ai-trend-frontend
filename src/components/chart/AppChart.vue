<template>
  <section class="chart-section">
    <h1 class="section-title">
      Radar Chart for the Megatrend <span>"{{ chosenMegatrend }}"</span>
    </h1>
    <div class="chart" ref="chartContainer" :style="{ width: width, height: height }"></div>
  </section>
</template>

<script>
import * as echarts from 'echarts';

export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
    width: {
      type: String,
      default: '720px',
    },
    height: {
      type: String,
      default: '480px',
    },
    chosenMegatrend: {
      type: String,
      default: 'AI',
    },
  },
  data() {
    return {
      newChart: null,
    };
  },
  mounted() {
    this.initChart();
    window.addEventListener('resize', () => this.resizeChart);
  },

  unmounted() {
    if (this.newChart) {
      this.newChart.dispose();
    }
    window.removeEventListener('resize', () => this.resizeChart);
  },
  methods: {
    /**
     * Initialize the chart in the predefined chart container
     */
    initChart() {
      if (this.chartContainer) {
        this.newChart = echarts.init(this.chartContainer);

        this.newChart.setOption(this.option);
      }
      this.newChart.on('legendselectchanged', () => {
        this.newChart.setOption(this.option, {
          notMerge: false,
          replaceMerge: ['graphic', 'series', 'radar'],
        });
      });
    },
    /**
     * Resize the chart to align with the window size
     */
    resizeChart() {
      if (this.newChart) {
        this.newChart.resize();
      }
    },
  },
  computed: {
    /**
     * Chart container reference
     */
    chartContainer() {
      return this.$refs.chartContainer;
    },
  },
  watch: {
    option: {
      /**
       * Update the chart option if new option available, useful for refresh
       * @param {Object} newOption - updated chart option
       */
      handler(newOption) {
        if (this.newChart) {
          this.newChart.setOption(newOption, true);
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  height: 100%;
}
.section-title {
  margin-bottom: 3rem;
}
</style>
