<template>
  <div class="container">
    <h1>
      Spectrum Visualizer
    </h1>
    <button type="button" class="btn btn-primary mb-3" @click="toggleAudio">
      {{isPlaying ? 'Stop' : 'Play'}}
    </button>
    <div class="d-flex justify-content-center" ref="canvas"></div>
  </div>
</template>

<script>
import { defineProps, reactive } from 'vue'
import p5 from 'p5';
import setup, { toggle } from '../analyze'

export default {
  name: 'p5Container',
  mounted() {
    new p5(setup, this.$refs.canvas)
  },
  data() {
    return {
      isPlaying: false,
    }
  },
  methods: {
    toggleAudio() {
      this.isPlaying = !this.isPlaying;
      toggle();
    }
  }
}
</script>

<style scoped>
</style>
