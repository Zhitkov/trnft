<template>
  <div class="all-screen">
    <div class="">
      Это двигается 
      <NuxtLink to="/technology">эту ссылку</NuxtLink> и переключите
    </div>
    Сейчас выбран период {{ stage }} fixedVideo - {{ fixedVideo }}
    <div v-for="(video, index) in movingVideos" :key="index">
      {{fixedVideo}} === {{fixedVideo}}
      <ModuleVideo
        v-if="fixedVideo === index"
        class="all-size"
        :videoSrc="video"
        :loop="true"
      ></ModuleVideo>
    </div>
    <div
      class="all-screen future-moving-screen"
      v-show="stage === 'future'"
    >
      <div v-show="futureMoving" class="logo-place">
        <img src="~/assets/picture/logo.png" alt="" />
      </div>

      <!-- <div v-for="item in 180" :key="item"> -->
      <!-- :style="'transform: scale(' + value2 + ');'" -->
      <!-- v-show="item === value" -->
      <div v-show="modelIndex === null" class="">
        <div v-for="item in 5" :key="item + '1'">
          <img :src="'/assets/picture/carousel/' + item + '.pdf'" alt="" />
        </div>
      </div>
      <div v-show="modelIndex !== null" class="">
        <div v-for="index in 3" :key="index">
          <div v-show="index === modelIndex">
            <VueProduct360 :images="technology.models[index]">
              <p>Грузиться</p>
            </VueProduct360>
          </div>
        </div>
      </div>

      <div class="button-place">
        <button @click="futureMoving = !futureMoving">
          ГЛАВНАЯ СТРАНИЦА {{ modelIndex }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import 'vue-range-component/dist/vue-range-slider.css'
// import VueRangeSlider from 'vue-range-component'
import VueProduct360 from '@deviznet/vue-product-360'

import { mapGetters } from 'vuex'


export default {
  async asyncData({ $axios }) {
    const stage = await $axios
        .$get('/api/api/technologies/stage/')
        .then((response) => {
          console.log(response, 'response.data')
          return response.stage
        })    
    var a = []
    for (const period of ['past', 'present', 'present2']) {
      const video = await $axios
        .$get('api/api/technologies/moving/'+ period +'/' )
        .then((response) => {
          console.log(response, 'response.data')
          return process.env.BASE_URL + response.current_video
        })

      a.push(video)
    }
    a.forEach((e) => {e = 'http://localhost:8000/media/' + e})
    
    return { movingVideos: a, stage: stage }
  },
  data() {
    return {
      futureMoving: false,
      newCoords: {},
      value: 60,
      slider: 0
    }
  },
  components: {
    VueProduct360,
  },
  // mounted() {
  //   this.changePos = function (pos) {
  //     document.scrollTop = pos
  //     console.log(document)
  //   }
  // },
  // watch: {
  // 'smallTablet.model': function () {
  //   this.$nextTick(function () {
  //     if (this.$refs[this.pageType][0].scrollTop !== this.scrollValue) {
  //       this.$refs[this.pageType][0].scrollTop = this.scrollValue
  //     }
  //   })
  // },
  // value(mv) {
  //   this.CHANGE_MODEL_VALUE(mv)
  // },
  // },
  // components: {
  //   ThreejsComponent: process.browser ? () => import('~/path/to/ThreejsComponent.vue') : null
  // },
  computed: {
    fixedVideo: function () {
      return this.stage === 'past'
        ? 0
        : this.stage === 'present'
        ? 1
        : this.stage === 'present2'
        ? 2
        : false
    },
    ...mapGetters({ byPath: 'byPath', videoByPath: 'video/byPath' }),
    videoTechnology() {
      return this.videoByPath('technology')
    },
    technology() {
      return this.byPath('technology')
    },
    smallTablet() {
      return this.byPath('smallTablet')
    },
    modelIndex() {
      return this.byPath('smallTablet.modelIndex')
    },
  },
}
</script>

<style></style>
