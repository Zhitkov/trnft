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
  /* background-image: url('~/assets/creative/fon.png'); */
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
  background-image: url('~/assets/creative/rbcornert.png'), url('~/assets/creative/rbcornerb.png'), url('~/assets/creative/fon.png');
  background-size:350px, 350px, 100vw 100vh ;
  background-position: left top, right bottom, center;
  background-repeat: no-repeat, no-repeat;
}
</style>
