<template>
  <div class="custom-video">
    <video id=""></video>
  </div>
</template>
<script setup>
import videojs from 'video.js'
import * as BoomstreamHlsPlugin from 'videojs-hls-boomstream'
BoomstreamHlsPlugin.init(videojs)
const player = videojs('my-video' /*, <videojs options {}>, <ready callback ()>*/)
player.boomstreamHls()
player.src({ src: 'https://play.boomstream.com/LvYMhaGj', type: 'video/mp4' })
</script>

<style></style>
