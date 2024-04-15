<script setup lang="ts">
import { computed } from 'vue';
import { isDark } from '../../composables/dark'
import { useData } from 'vitepress'
import CommonThemeToggler from '../common/vp-theme-toggler.vue'
import subNavLocale from '../../../i18n/component/sub-nav.json';

const { lang } = useData()
const locale = computed(() => subNavLocale[lang.value])
</script>

<template>
  <div class="theme-toggler-content">
    <CommonThemeToggler
        :aria-label="locale['theme-toggler']"
        :aria-checked="isDark"
    />
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;
.theme-toggler-content {
  @include with-bg;
  background-color: transparent;
  display: none;
  border-radius: 50%;
  height: 24px;
  padding: 0 12px;

  @include respond-to('md') {
    display: flex;
    align-items: center;
  }
}
</style>
