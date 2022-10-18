<template>
  <div class="all-screen">
    <div class="">
      Это неподвижный большой экран стенда техноглогии. Здесь играет ролик,
      выбранный с помощью кнопок планшета. Если хотите переключить ролик,
      откройте в другой вкладке
      <NuxtLink to="/technology">эту ссылку</NuxtLink> и переключите
    </div>
    Сейчас выбран период {{ technology.period }} fixedVideo - {{ fixedVideo }}
    <div v-for="(video, index) in videoTechnology.fixed" :key="index">
      <ModuleVideo
        v-if="index === fixedVideo"
        class="all-size"
        :videoSrc="video"
        :loop="true"
      ></ModuleVideo>
    </div>
    <div
      class="all-screen future-moving-screen"
      v-show="technology.period === 'future'"
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
      return this.technology.period === 'past'
        ? 0
        : this.technology.period === 'present'
        ? 1
        : this.technology.period === 'present2'
        ? 2
        : this.technology.period === 'future'
        ? false
        : 'ОШИБКА'
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
