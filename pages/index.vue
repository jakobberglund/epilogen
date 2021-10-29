<template>
  <div :class="indexClass">
    <div>
      <h1 :class="indexH1Class">Epilogen, kommer snart.</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { indexClass, indexH1 } from './index.css'

export default Vue.extend({
  computed: {
    indexClass: () => indexClass,
    indexH1Class: () => indexH1,
  },
})
</script>
