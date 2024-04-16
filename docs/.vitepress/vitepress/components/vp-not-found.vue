<script setup lang="ts">
import { useData } from "vitepress"
import notFoundLocale from "../../i18n/pages/not-found.json"
const goHome = () => {
  window.location.href = `/`
}, { lang } = useData(), locale = notFoundLocale[lang.value];
</script>

<template>
  <el-result icon="error" :title="locale.title" :sub-title="locale.desc">
    <template #extra>
      <el-button @click="goHome">{{ locale['button-title'] }}</el-button>
    </template>
  </el-result>
</template>

<style lang="scss" scoped>
.el-result {
  height: 50vh;
  width: 100vw;
}
</style>
