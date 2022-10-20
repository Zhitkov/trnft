<template>
  <div class="all-screen">
    <div v-for="(video, index) in movingVideos" :key="index">
      <ModuleVideo
        v-if="fixedVideo === index"
        class="all-size"
        :videoSrc="video"
        :loop="true"
      ></ModuleVideo>
    </div>
    <div style="height: 100vh; display: flex;" class="all-size corner-decoration" v-show="stage === 'future'">
      <div class="future-moving-screen flex-center">
        <div class="carousel" v-show="modelIndex === null">
          <div class="logo-place">
            <img src="~/assets/picture/logo.png" alt="" />
          </div>
          <div class="carousel-items">
            <img
              :key="item + '1'"
              v-for="item in 5"
              v-show="carouselIndex === item"
              :src="require('/assets/picture/carousel/' + item + '.png')"
              alt=""
            />
          </div>
          <div class="control-elements">
            <div @click="carouselChange(-1)" class="arrow-back">
              <!-- <img
                src="~/assets/picture/carousel/controlElements/arrowBack.png"
                alt=""
              /> -->
            </div>
            <div class="circle" v-for="item in 5" :key="item + '1'">
              <img
                v-show="carouselIndex === item"
                src="~/assets/picture/carousel/controlElements/active.png"
                alt=""
              />
              <img
                v-show="carouselIndex !== item"
                src="~/assets/picture/carousel/controlElements/notActive.png"
                alt=""
              />
            </div>
            <div @click="carouselChange(1)" class="arrow-forward">
              <!-- <img
                src="~/assets/picture/carousel/controlElements/arrowForward.png"
                alt=""
              /> -->
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
        </div>
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
    for (const period of ['past', 'present_1', 'present_2']) {
      const video = await $axios
        .$get('api/api/technologies/moving/' + period + '/')
        .then((response) => {
          console.log(response, 'response.data')
          return process.env.BASE_URL + response.current_video
        })

      a.push(video)
    }
    a.forEach((e) => {
      e = '/media/' + e
    })

    return { movingVideos: a, stage: stage }
  },
  data() {
    return {
      futureMoving: false,
      newCoords: {},
      value: 60,
      carouselIndex: 1,
      slider: 0,
    }
  },
  components: {
    VueProduct360,
  },
  methods: {
    carouselAuto: function () {
        setInterval(() => {
          this.carouselChange(1)
        }, 5000)
      },
    carouselChange(count) {
      this.carouselIndex += count
      if (this.carouselIndex === 6) {
        this.carouselIndex = 1
      }
      if (this.carouselIndex === 0) {
        this.carouselIndex = 5
      }
    },
  },
  mounted() {
    this.carouselAuto()
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

<style>
.future-moving-screen {
  /* padding: 10vh 0; */
  height: 80vh;
}
.future-moving-screen > .carousel > .logo-place {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.future-moving-screen > .carousel > .logo-place {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
}
.future-moving-screen > .carousel > .logo-place > img {
  width: 80%;
  display: flex;
  justify-self: center;
  align-self: center;
}

.future-moving-screen > .carousel > .carousel-items {
  height: 80%;
  display: flex;
}
.future-moving-screen > .carousel > div {
  display: flex;
  justify-content: center;
  /* padding: 10% 0%; */
}
.future-moving-screen > .carousel > div > img {
  padding: 10% 0%;
  width: 80%;
  height: 80%;
}
.future-moving-screen > .carousel > .control-elements {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
}
.future-moving-screen > .carousel > .control-elements > div {
  width: 10%;
}
.future-moving-screen > .carousel > .control-elements > div > img {
  width: 100%;
}
</style>
