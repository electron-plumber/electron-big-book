<script setup lang="ts">
import { nextTick, watch, ref } from 'vue';
import { normalize} from '../../utils';
import { useRoute, useRouter} from 'vitepress';
import { useNav } from '~/composables/nav'
import { Link } from '~/types';

const route = useRoute()
const navs = useNav()
const router = useRouter()
const expandMenus: Link[] = navs.value.slice(5)

const currentActiveMatch = ref<string>('');

watch(
  () => route.path,
  () => nextTick(() =>  {
    currentActiveMatch.value = expandMenus.find(item => {
      const regex = new RegExp(item.activeMatch)
      return regex.test(normalize(`/${route.data.relativePath}`))
    })?.activeMatch
  }),
  { immediate: true }
)

</script>

<template>
  <div class="menu-extension-container">
    <ClientOnly>
      <ElDropdown popper-class="menu-extension-popup">
        <ElIcon :size="24">
          <i-ri-menu-line />
        </ElIcon>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem
              v-for="(item, key) in expandMenus"
              :key="key"
              :class="{ 'menu-item': true, selected: item.activeMatch === currentActiveMatch }"
              @click=" router.go(item.link)"
            >
              {{ item.text }}
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixins' as *;

.menu-extension-container {
  display: none;
  height: 24px;
  padding: 0 12px;
  cursor: pointer;

  @include respond-to('md') {
    display: block;
  }
}
</style>

<style lang="scss">
.el-dropdown__popper.menu-extension-popup {
  --el-bg-color-overlay: var(--bg-color);
  --el-popper-border-radius: 8px;
  --el-border-color-light: transparent;

  padding: 7px 0;
  min-width: 192px;
  transition: background-color 0.5s;

  .el-popper__arrow {
    display: none;
  }

  .menu-item {
    padding: 0 16px;
    line-height: 28px;

    &.selected {
      --el-text-color-regular: var(--brand-color);
    }
  }
}
</style>
