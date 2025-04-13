<template>
  <AppHeader @selected-megatrend="handleSelection" :megatrends="megatrends" />
  <h3 v-if="isLoading && !error">Loading ...</h3>
  <h3 v-if="!isLoading && megatrends.length === 0">No chart to display for now, please try later!</h3>
  <AppChart v-if="!isLoading && !error && indicators.length > 0 && chartData.length > 0" :option="chartOptions" :chosenMegatrend="enteredMegatrend" />
  <h3 v-if="error">{{ error }}</h3>
</template>

<script>
import api from '@/services/apiService';
import cfg from '@/components/chart/chartConfig';
import modules from '@/services/modules';
import AppChart from './components/chart/AppChart.vue';
import AppHeader from './components/layouts/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppChart,
  },
  data() {
    return {
      megatrends: [],
      indicators: [],
      chartData: [],
      enteredMegatrend: 'AI',
      meanTechnologyReadinessLevel: {
        development: 2,
        pilot: 5,
        deploy: 8,
      },
      isLoading: true,
      error: null,
    };
  },
  computed: {
    /**
     * Chart options and configurations
     */
    chartOptions() {
      return cfg.chartOptions(this.chartData, this.indicators);
    },
  },
  mounted() {
    this.fetchTrend(this.enteredMegatrend);
  },
  methods: {
    handleSelection(value) {
      this.enteredMegatrend = value;
      this.fetchTrend(this.enteredMegatrend);
    },

    fetchTrend(trend) {
      api
        .getTrend('trends/', modules.setUnAuthHeaders())
        .then((response) => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);

          const statistics = {};
          if (response.statusText === 'OK') {
            this.megatrends = [...new Set(response.data.map((d) => d.megatrend))];
            const currentMegatrends = response.data.filter((d) => d.megatrend == trend);
            const macrotrends = [...new Set(currentMegatrends.map((d) => d.macrotrend))];
            let newIndicator = [];
            macrotrends.forEach((trend) => newIndicator.push({ name: trend, max: 9 }));
            this.indicators = newIndicator;

            modules.countRecords(this.meanTechnologyReadinessLevel, currentMegatrends, statistics);
          }
          this.chartData = modules.getStatistics(statistics);
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = 'Op! An error happened during the data loading, please try later.';
          console.log(error);
        });
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

h3 {
  text-align: center;
  margin-block: auto;
}

#app .chart-section {
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
}
</style>
