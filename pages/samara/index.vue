<template>
  <div class="">
    Это Страница Стенда Самара, здесь вы можете поменять видео(Сейчас нажата
    кнопка({{ samara.counter }})), согласно указанной кнопке(они также есть в
    <NuxtLink to="/tablet">планшете</NuxtLink>)

    <div v-for="(item, index) in 4" :key="index">
      <button @click="CHANGE_SAMARA_VIDEO(index); IDLE_SAMARA(false)">
        {{ '(' + index + ')Этап' + (index + 1) }}
      </button>
    </div>
    <button @click="SAMARA_START()">Пуск</button>
    <br />
    <NuxtLink to="/samara/map">Страница карты Самары</NuxtLink>
    <NuxtLink to="/samara/video">Страница видео Самары</NuxtLink>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['samara']),
  },
  methods: {
    ...mapMutations(['CHANGE_SAMARA_VIDEO', 'SAMARA_START', 'IDLE_SAMARA']),
  },
}
</script>

<style></style>
