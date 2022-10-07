<template>
  <div class="">
    Это страница технологий. Нажмите на кнопки ниже, чтобы запустить
    соответствующий период. Кнопки также есть в
    <NuxtLink to="/tablet">планшете</NuxtLink>

    <br>
    Выбран период {{technology.period}}
    <br>

    <div v-for="(item, index) in ['past', 'present', 'present2', 'future']" :key="index">
      <button @click="CHANGE_TECHNOLOGY_PERIOD(item)">
        {{ item }}
      </button>
    </div>

    <br />
    <NuxtLink to="/technology/fixed"
      >ссылка на Большой задний экран в технологиях</NuxtLink>
    <br />
    <NuxtLink to="/technology/moving"
      >ссылка на Перемещающиеся экран в технологиях</NuxtLink>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['technology']),
  },
  methods: {
    ...mapMutations(['CHANGE_TECHNOLOGY_PERIOD']),
  },
}
</script>

<style></style>
