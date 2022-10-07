<template>
  <nuxt />
</template>

<script>
export default {}
</script>

<style>
  body {
    margin: 0 !important;
  }
.all-screen {
  height: 100vh;
  width: 100vw;
}
.all-size {
  height: 100%;
  width: 100%;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-content: center;
}

div.mx-video-player__controls {
  display: none !important;
}
div.mx-video-player__mask-progress.mx-video-player__mask-progress_show {
  display: none !important;
}
div.mx-video-player__controls.mx-video-player__controls_hide {
  display: none !important;
}
div.mx-video-player__mask-progress.mx-video-player__mask-progress_show {
  display: none !important;
}
div.mx-video-player__mask-progress.mx-video-player__mask-progress_show {
  display: none !important;
}

.corner-decoration {
  background-image: url('~/assets/creative/rbcornert.svg'), url('~/assets/creative/rbcornerb.svg');
  background-position: left top, right bottom;
  background-repeat: no-repeat, no-repeat;
}
</style>
