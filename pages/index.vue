<template>
  <div class="wrapper">
    <div class="inner">
      <h1>Epilogen<sup>1</sup></h1>
      <p>Kommer snartt</p>
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
  font-size: clamp(2rem, calc(1rem + 2vw), 4rem);
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

p {
  color: var(--epl--color--background);
  background: var(--epl--color--text);
  font-size: clamp(0.5rem, calc(1rem + 2vw), 1rem);
  padding: 0.5em;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.02em;
}
</style>
