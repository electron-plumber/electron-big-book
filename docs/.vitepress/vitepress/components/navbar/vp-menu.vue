<script setup lang="ts">
import { useNav } from '../../composables/nav'
import VPMenuLink from './vp-menu-link.vue'
import { Link } from '~/types';

const navs = useNav()
const mainMenus: Link[] = navs.value.slice(0, 5)

</script>

<template>
  <nav v-if="mainMenus" class="navbar-menu">
    <VPMenuLink v-for="(item, key) in mainMenus" :key="key" :item="item" />
  </nav>
</template>
