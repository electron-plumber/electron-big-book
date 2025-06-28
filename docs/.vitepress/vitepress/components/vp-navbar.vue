<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

import VPNavbarSearch from './navbar/vp-search.vue'
import VPNavbarMenu from './navbar/vp-menu.vue'
import VPNavbarThemeToggler from './navbar/vp-theme-toggler.vue'
import VPNavbarSocialLinks from './navbar/vp-social-links.vue'
import VPNavbarHamburger from './navbar/vp-hamburger.vue'
import vpNavMenuExtension from './navbar/vp-menu-extension.vue'

const { theme } = useData()

defineProps<{
  fullScreen: boolean
}>()

defineEmits(['toggle'])

const currentLink = computed(() => {
  return '/'
})
</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="logo-container">
        <a :href="currentLink">
          <apple-book-svg class="logo"/>
        </a>
      </div>
      <div class="content">
        <VPNavbarSearch class="search" :options="theme.agolia" />
        <VPNavbarMenu class="menu" />
        <vpNavMenuExtension class="menu-extension" />
        <VPNavbarThemeToggler class="theme-toggler" />
        <VPNavbarSocialLinks class="social-links" />
        <VPNavbarHamburger
            :active="fullScreen"
            class="hamburger"
            @click="$emit('toggle')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height);
  > a {
    height: 30px;
  }
  .logo {
    position: relative;
    height: 100%;
  }
}
</style>
