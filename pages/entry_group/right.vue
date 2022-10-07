<template>
  <div class="all-screen">
    <ModuleVideo :videoSrc="entryGroup.right" :loop="true"></ModuleVideo>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['entryGroup']),
  },
}
</script>

<style></style>
