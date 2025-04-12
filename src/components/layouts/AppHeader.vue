<template>
  <header>
    <nav>
      <span class="title">Trend Information</span>
      <div>
        <label for="megatrend">Megatrend</label>
        <select name="megatrend" id="megatrend">
          <option value="AI">choose a megatrend</option>
          <option value="AI">AI</option>
        </select>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: lightgray;
  border-bottom: 1px solid #fff;
  padding-block: 1rem;
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
