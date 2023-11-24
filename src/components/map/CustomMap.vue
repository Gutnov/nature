<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initMap } from './initMap.js'

onMounted(() => {
  initMap()
})
</script>
<style lang="scss">
#map {
  width: 100%;
  height: 400px;
  max-height: 100%;
  border-radius: 15px;
}

.leaflet-control-attribution {
  display: none !important;
}
</style>
