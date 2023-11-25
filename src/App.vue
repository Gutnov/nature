<template>
  <div class="app">
    <AppHeader />
    <div class="container">
      <main class="app__main">
        <AppSidebar />
        <div class="app__map-wr">
          <MapFilter style="margin-bottom: 20px" />
          <CustomMap style="margin-bottom: 20px" />
          <div class="app__video-block">
            <CustomVideo videoId="vid1" src="https://play.boomstream.com/xmco7zyD" />
            <CustomVideo videoId="vid2" src="https://play.boomstream.com/MS4K9fcg" />
          </div>
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
import videojs from 'video.js'
import * as BoomstreamHlsPlugin from 'videojs-hls-boomstream'
BoomstreamHlsPlugin.init(videojs)
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
.app__video-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

@media (max-width: 900px) {
  .app__main {
    display: block;
  }
  .app__video-block {
    grid-template-columns: 1fr;
  }
}
</style>
