<template>
  <div>
    <div v-for="(video, index) in videoTimeline" :key="index">
      {{video.year}}
      {{ newVideos[index] || videoTimeline[index].video2 }}
    <ModuleVideo
      v-if="index === timeline.counter"
      :videoSrc="newVideos[index]||videoTimeline[index].video1"
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
  async asyncData({ $axios }) {
    const api = 'http://localhost:8000'
    var a = [];
    for (const year of ['1936', '1953']) {
      const video = await $axios.$get(api + '/api/timeline/1936/1/').then((response) => {
        console.log(response, 'response.data');
        return api + response.current_video
      })
      a.push(video);
    }
    return { newVideos: a }
  },
  // data() {
  //   return {
  //     asd: true,
  //   }
  // },
  computed: {
    ...mapGetters({videoByPath: 'video/byPath', byPath: 'byPath'}),
    timeline() {
      return this.byPath('timeline')
    },
    videoTimeline() {
      return this.videoByPath('timeline.video')
    },
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






