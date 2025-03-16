<script lang="ts" setup>
defineProps<{
  version: string
}>()
</script>

<template>
  <el-tag size="small" hit>
    {{ version }}
  </el-tag>
</template>
