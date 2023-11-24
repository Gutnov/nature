<template>
  <div class="app">
    <AppHeader />
    <div class="container">
      <main class="app__main">
        <AppSidebar />
        <div class="app__map-wr">
          <MapFilter style="margin-bottom: 20px" />
          <CustomMap />
          <CustomVideo />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import MapFilter from './components/map/MapFilter.vue'
import CustomMap from './components/map/CustomMap.vue'
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
import CustomVideo from './components/CustomVideo.vue'
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}
.app__main {
  display: grid;
  grid-template-columns: auto 1fr;
}
.app__map-wr {
  padding: 20px;
  background-color: #f9fafc;
  position: relative;
}
</style>
