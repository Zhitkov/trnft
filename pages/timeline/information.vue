<template>
  <div>
    <div v-for="(video, index) in videoTimeline" :key="index">
      {{ video.year }}
      {{ newVideos[index] || videoTimeline[index].video2 }}
      <ModuleVideo
        v-if="index === timeline.counter"
        :videoSrc="newVideos[index] || videoTimeline[index].video2"
        :loop="false"
        :pause="timeline.pause"
        @ended="changeTimeline()"
      ></ModuleVideo>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  async asyncData({ $axios }) {
    const api = 'http://localhost:8000'
    var a = []
    for (const year of ['1936', '1953']) {
      const video = await $axios
        .$get(api + '/api/timeline/1936/2/')
        .then((response) => {
          console.log(response, 'response.data')
          return api + response.current_video
        })
      a.push(video)
    }
    return { newVideos: a }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({ byPath: 'byPath', videoByPath: 'video/byPath' }),

    videoTimeline() {
      return this.videoByPath('timeline.video')
    },
    timeline() {
      return this.byPath('timeline')
    },
  },
  methods: {
    ...mapMutations(['CHANGE_TIMELINE_VIDEO']),

    // ...mapActions({
    //   getTimelineVideo: 'video/getTimelineVideo'
    // }),
    changeTimeline() {
      this.CHANGE_TIMELINE_VIDEO(this.timeline.counter + 1)
    },
    // loadVideo(video) {
    //   if (video.video2 === null) {
    //     console.log(video.year)
    //     this.getTimelineVideo('api/timeline/' + video.year + '/2')
    //     return video.video2
    //   } else return video.video2
    // },
  },
}
</script>

<style></style>
