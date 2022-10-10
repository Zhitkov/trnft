<template>
  <div class="all-size">
    <div>
      <label for="vue-range-slider">x</label>
      <br />
      <vue-range-slider
        :name="'x'"
        :step="1"
        :min="1"
        :max="179"
        v-model="modelValue"
      ></vue-range-slider>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {
  data() {
    return {
      modelValue: 1,
    }
  },
  props: {
    modelNum: Number,
  },
  components: {
    VueRangeSlider,
  },
  watch: {
    modelValue(mv) {
      this.CHANGE_BY_PATH('smallTablet.modelValue', mv)
    },
  },
  computed: {
    // ...mapGetters(['smallTablet']),
  },
  methods: {
    ...mapMutations(['CHANGE_BY_PATH']),
  },
}
</script>

<style></style>
