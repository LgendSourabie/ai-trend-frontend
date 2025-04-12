<template>
  <h1>My chart will go here</h1>
</template>

<script>
import api from '@/services/apiService';
import modules from '@/services/modules';

export default {
  methods: {
    async fetchTrend() {
      api.getTrend('trends/', modules.setUnAuthHeaders()).then((response) => {
        console.log('Your trend data', response);

        if (response.statusText === 'OK') {
          console.log('Data', response.data);

          return response;
        }
      });
    },
  },
  mounted() {
    this.fetchTrend();
  },
};
</script>
