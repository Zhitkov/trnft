<template>
  <div class="all-screen">
      <!-- style="display: none" -->
    
    <div v-for="(video, index) in samara.video" :key="index">
      <v-idle
      @idle="IDLE_SAMARA(true)"
      :loop="false"
      :duration="video.endTime + 3"
      :events="['mousemove', 'keypress', 'click', 'touchmove', 'touchstart', 'touchmove', 'scroll']"
      v-if="!samara.idle && (index === samara.counter)"
    /> 
    </div>
    <div class="">
      Здесь играет ролик, выбранный с помощью кнопок, на стенде Самара
      снизу(Этап 1...4, Пуск) Если хотите переключить ролик, откройте в другой
      вкладке <NuxtLink to="/entry_group/left">эту ссылку</NuxtLink> и
      переключите
    </div>
    Сейчас Выбран {{ samara.counter }}
    <!-- <div class="" v-show="!samara.idle"> -->
    <div v-show="!samara.idle" v-for="(video, index) in samara.video" :key="index">
      <ModuleVideo
        v-if="index === samara.counter"
        class="all-size"
        :videoSrc="video.src"
        :loop="false"
        @ended="changeSamara()"
      ></ModuleVideo>
    </div>
<!-- </div> -->
<img class="all-screen" v-show="samara.idle" src="~/assets/picture/logo.png" alt="">
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['samara']),
  },
  methods: {
    ...mapMutations(['CHANGE_SAMARA_VIDEO', 'IDLE_SAMARA']),
    changeSamara() {
      if(this.samara.start) {
        this.CHANGE_SAMARA_VIDEO(this.samara.counter + 1)
      }
    },
    samaraIdle() {

    }
  },
}
</script>

<style></style>
