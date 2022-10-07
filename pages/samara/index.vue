<template>
  <div class="">
    Это Страница Стенда Самара, здесь вы можете поменять видео(Сейчас нажата
    кнопка({{ samara.counter }})), согласно указанной кнопке(они также есть в
    <NuxtLink to="/tablet">планшете</NuxtLink>)

    <div v-for="(item, index) in 4" :key="index">
      <button
        @click="
          CHANGE_SAMARA_VIDEO(index)
          CHANGE_BY_PATH(['samara.idle', false])
          CHANGE_BY_PATH(['samara.start', false])
        "
      >
        {{ '(' + index + ')Этап' + (index + 1) }}
      </button>
    </div>
    <button @click="samaraStart()">Пуск</button>
    <br />
    <NuxtLink to="/samara/map">Страница карты Самары</NuxtLink>
    <NuxtLink to="/samara/video">Страница видео Самары</NuxtLink>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({videoByPath: 'video/byPath', byPath: 'byPath'}),
    samara() {
      return this.byPath('samara')
    },
    videoSamara() {
      return this.videoByPath('samara')
    }
  },
  methods: {
    ...mapMutations(['CHANGE_BY_PATH','CHANGE_SAMARA_VIDEO']),
    samaraStart() {
      this.CHANGE_BY_PATH(['samara.start', true])
      this.CHANGE_BY_PATH(['samara.counter', 0])
    },
  },
}
</script>

<style></style>
