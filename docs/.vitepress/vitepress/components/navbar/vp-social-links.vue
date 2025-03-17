<script setup lang="ts">
import { useSocialLinks } from '../../composables/social-links'
import VPSocialLink from './vp-social-link.vue'

const links = useSocialLinks()
</script>

<template>
  <div class="social-links">
    <VPSocialLink v-for="link in links" :key="link.text" v-bind="link" />
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;
.social-links {
  height: 24px;
  padding: 0 12px;

  @include down-to('p-825') {
    padding: 0;
  }
}
</style>
