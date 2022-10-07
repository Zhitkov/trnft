<template>
  <div>
    <div v-for="(video, index) in timeline.information" :key="index">
      {{video.year}}
    <ModuleVideo
      v-if="index === timeline.counter"
      :videoSrc="video.src"
      :loop="false"
      @ended="changeTimeline()"
    ></ModuleVideo>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    changeTimeline() {
      this.CHANGE_TIMELINE_VIDEO(this.timeline.counter + 1)
    },
  },
}
</script>

<style></style> 






