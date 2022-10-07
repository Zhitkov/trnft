<template>
  <div class="timeline">
      <nuxt-link to="/timeline/map">Первый экран c картой</nuxt-link>
      <nuxt-link to="/timeline/information">Первый экран с информацией</nuxt-link>
      <button @click="CHANGE_BY_PATH(['timeline.pause', !timeline.pause])">puse</button>timeline.pause   
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['timeline']),
  },
  methods: {
    ...mapMutations(['CHANGE_BY_PATH'])
  }
}
</script>

<style>
  

</style>
