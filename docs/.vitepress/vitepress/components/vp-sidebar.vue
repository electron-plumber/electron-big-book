<script lang="ts" setup>
import { useSidebar } from '../composables/sidebar'
import VPSidebarLink from './sidebar/vp-sidebar-link.vue'
import { onMounted, ref } from 'vue'

defineProps<{ open: boolean }>()
defineEmits(['close'])

const { sidebars, hasSidebar } = useSidebar()
const scrollbar = ref()

onMounted(()=> {
  autoScrollToActiveMenu()
})

function autoScrollToActiveMenu() {
  const scrollContainer = document.querySelector(".el-scrollbar__wrap")
  const activeLink = document.querySelector(".el-scrollbar .link.active")
  if (scrollContainer && activeLink) {
    // Calculate the offset of the target element relative to scroll container
    const targetPosition = activeLink.offsetTop - scrollContainer.offsetTop - 250
    scrollbar.value.scrollTo({ top: targetPosition })
  }
}

</script>

<template>
  <el-scrollbar ref="scrollbar" v-if="hasSidebar" :class="{ sidebar: true, open }">
    <aside>
      <slot name="top" />
      <div class="sidebar-groups">
        <section v-for="(item, key) of sidebars" :key="key" class="sidebar-group">
          <p class="sidebar-group__title">
            {{ item.text }}
          </p>
          <VPSidebarLink
            v-for="(child, childKey) in item.children"
            :key="childKey"
            :item="child"
            @close="$emit('close')"
          />
        </section>
      </div>
      <slot name="bottom" />
    </aside>
  </el-scrollbar>
</template>
