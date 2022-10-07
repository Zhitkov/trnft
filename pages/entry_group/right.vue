<template>
  <div class="all-screen">
    <ModuleVideo :videoSrc="entryGroup.right" :loop="true"></ModuleVideo>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({videoByPath: 'video/byPath'}),
    entryGroup() {
      return this.videoByPath('entryGroup')
    }
  },
}
</script>

<style></style>
