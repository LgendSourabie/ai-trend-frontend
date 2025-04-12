<template>
  <AppHeader />
  <AppChart />
</template>

<script>
import AppChart from './components/chart/AppChart.vue';
import AppHeader from './components/layouts/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppChart,
  },
};
</script>

<style></style>
