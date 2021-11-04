<template>
  <div class="wrapper">
    <div>
      <h1>Epilogen, kommer snart.</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
}

h1 {
  max-width: 35ch;
  font-size: clamp(1rem, calc(1rem + 2vw), 1.25rem);
  font-weight: 200;
}
</style>
