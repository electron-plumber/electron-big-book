<script setup lang="ts">
  import { watch } from 'vue'

  const props = defineProps<{
    show: boolean
  }>()

  /**
   * When opening the side on the mobile,
   * lock the main scrollbar to prevent the main scrollbar from scrolling when scrolling the side.
   */
  watch(() => props.show, (val) => {
      if (val) {
        document.body.classList.add('overlay-lock-scroll')
      } else {
        document.body.classList.remove('overlay-lock-scroll')
      }
    }
  )
</script>

<template>
  <Transition name="el-fade-in">
    <div v-if="show" />
  </Transition>
</template>
