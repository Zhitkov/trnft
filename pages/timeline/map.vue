<template>
  <div>
    <div v-for="(video, index) in timeline.map" :key="index">
      {{video.year}}
    <ModuleVideo
      v-if="index === timeline.counter"
      :videoSrc="video.src"
      :loop="false"
      @ended="changeTimeline()"
      :pause="timeline.pause"
    ></ModuleVideo>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  // data() {
  //   return {
  //     asd: true,
  //   }
  // },
  computed: {
    ...mapGetters(['timeline']),
  },
  methods: {
    ...mapMutations(['CHANGE_TIMELINE_VIDEO']),
    changeTimeline() {
      this.CHANGE_TIMELINE_VIDEO(this.timeline.counter + 1)
    },
  },
}
</script>

<style></style> 






