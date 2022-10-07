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
import { mapGetters, mapMutations } from 'vuex'

export default {
  // data() {
  //   return {
  //     asd: true,
  //   }
  // },
  computed: {
    ...mapGetters({byPath: 'byPath', videoByPath: 'video/byPath'}),

    timeline() {
      return this.videoByPath('timeline')
    },
    timeline() {
      return this.byPath('timeline')
    },
  },
  methods: {
    ...mapMutations([
      'CHANGE_TIMELINE_VIDEO'
    ]),
    changeTimeline() {
      this.CHANGE_TIMELINE_VIDEO(this.timeline.counter + 1)
    },
  },
}
</script>

<style></style> 






