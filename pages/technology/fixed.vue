<template>
  <div class="all-screen">
    <div class="">
      Это неподвижный большой экран стенда техноглогии. Здесь играет ролик,
      выбранный с помощью кнопок планшета. Если хотите переключить ролик,
      откройте в другой вкладке
      <NuxtLink to="/technology">эту ссылку</NuxtLink> и переключите
    </div>
    Сейчас выбран период {{ technology.period }} fixedVideo - {{ fixedVideo }}
    <div v-for="(video, index) in technology.fixed" :key="index">
      <ModuleVideo
        v-show="index === fixedVideo"
        class="all-size"
        :videoSrc="video"
        :loop="true"
      ></ModuleVideo>
    </div>
    <div v-show="this.technology.period === 'future'">
        
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    fixedVideo: function () {
      return this.technology.period === 'past'
        ? 0
        : this.technology.period === 'present'
        ? 1
        : this.technology.period === 'present2'
        ? 2
        : this.technology.period === 'future'
        ? 3
        : 'ОШИБКА'
    },
    ...mapGetters(['technology']),
  },
}
</script>

<style></style>
