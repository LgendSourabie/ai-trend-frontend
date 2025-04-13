<template>
  <header>
    <nav>
      <span class="title">Trend Information</span>
      <div class="select-container">
        <label for="megatrend">Megatrend:</label>
        <select name="megatrend" id="megatrend" @change="onSelect" v-model="selectedValue">
          <option v-for="megatrend in megatrends" :key="megatrend" :value="megatrend">{{ megatrend }}</option>
        </select>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ['selected-megatrend'],
  data() {
    return {
      selectedValue: 'AI',
    };
  },
  props: {
    megatrends: {
      type: Array,
      default: new Array([]),
    },
  },
  methods: {
    /**
     * @emits
     * Emit the selected megatrend to the other components to be used
     * The emitted megatrend can be listened to from the output @selected-megatrend
     */
    onSelect() {
      this.$emit('selected-megatrend', this.selectedValue);
    },
  },
};
</script>

<style scoped>
header {
  background: lightgray;
  border-bottom: 1px solid #fff;
  padding-block: 1rem;
}
header nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}

.select-container {
  display: flex;
  gap: 0.5rem;
  height: 32px;

  align-items: center;
}

#megatrend {
  height: inherit;
  border: 1px solid #ccc;
  outline: none;
  padding-inline: 0.5rem;
}

nav {
  max-width: 1440px;
  padding-inline: 3rem;
}

.title {
  font-size: 24px;
  font-weight: 500;
}
</style>
