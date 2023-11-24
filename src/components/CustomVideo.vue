<template>
  <div id="custom-video" class="custom-video">
    <video :id="videoId"></video>
  </div>
</template>
<script setup>
import videojs from 'video.js'
import { onMounted } from 'vue'
const props = defineProps({
  src: String,
  videoId: String
})
onMounted(() => {
  const player = videojs(props.videoId, {
    controls: true
  })
  player.boomstreamHls()
  player.src(props.src)
})
</script>

<style lang="scss">
#custom-video {
  height: 400px;
  width: 100%;

  .vjs-boomstream-hls {
    max-width: 100%;
    width: auto;

    .vjs-big-play-button {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: none;
    }
  }
}

.vjs-poster img {
  max-width: 100%;
}
</style>
