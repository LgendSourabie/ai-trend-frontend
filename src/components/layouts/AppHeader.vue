<template>
  <header>
    <nav>
      <span class="title">Trend Information</span>
      <div class="container">
        <div class="select-container">
          <label for="megatrend">Megatrend:</label>
          <select v-if="megatrends.length === 0" name="megatrend" id="megatrend" @change="onSelect">
            <option value="No megatrend">No megatrend</option>
          </select>
          <select v-else name="megatrend" id="megatrend" @change="onSelect" v-model="selectedValue">
            <option v-for="megatrend in megatrends" :key="megatrend" :value="megatrend">{{ megatrend }}</option>
          </select>
        </div>
        <div v-if="megatrends.length !== 0" class="select-container">
          <label for="shape">Chart shape:</label>
          <select name="shape" id="shape" @change="onShapeSelect" v-model="selectedShape">
            <option value="circle">Circle</option>
            <option value="polygon">Polygon</option>
          </select>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ['selected-megatrend', 'selected-shape'],
  data() {
    return {
      selectedValue: 'AI',
      selectedShape: 'circle',
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
    /**
     * @emits
     * Emit the selected chart shape to the app component
     * The emitted shape can be listened to from the output @selected-shape
     */
    onShapeSelect() {
      this.$emit('selected-shape', this.selectedShape);
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

.container {
  display: flex;
  gap: 1rem;
}

.select-container {
  display: flex;
  gap: 0.5rem;
  height: 32px;
  align-items: center;
}

#megatrend,
#shape {
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
