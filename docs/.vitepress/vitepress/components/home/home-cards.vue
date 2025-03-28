<script lang="ts" setup>
  import { computed } from "vue"
  import { useNav } from '../../composables/nav'
  import homeLocale from '../../../i18n/pages/home.json'
  import { useData, useRouter } from 'vitepress';

  const router = useRouter()
  const { lang } = useData(), navs = useNav(), homeLang = computed(() => homeLocale[lang.value])
  // Pin home page tab
  const targets = [
    'logic',
    'math',
    'english',
    'writing'
  ];
  const fixedCard = navs.value.filter(item => targets.includes(item?.['home-card-type']))
</script>

<template>
  <div class="cards">
    <ul class="container">
      <li v-for="item in fixedCard" :key="item.link">
        <ElScrollbar class="card" v-if="item.hasOwnProperty('home-card-type')" @click="router.go(item.link)">
          <math-svg v-if="item['home-card-type'] == 'math' " w="25" m="t-12 b-10" />
          <logic-svg v-if="item['home-card-type'] == 'logic' " w="25" m="t-12 b-10" />
          <english-svg v-if="item['home-card-type'] == 'english' " w="25" m="t-12 b-10" />
          <writing-svg v-if="item['home-card-type'] == 'writing' " w="25" m="t-12 b-10" />
          <h3>{{ item.text }}</h3>
          <p>{{ item.description }}</p>
        </ElScrollbar>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.home-page {
  .cards {
    margin: 30px auto;
    max-width: 1150px;

    .container {
      padding: 0;
      margin: 0 auto;

      &::before,
      &::after {
        display: table;
        content: '';
      }

      &::after {
        clear: both;
      }
    }

    li {
      width: 25%;
      padding: 10px 19px;
      box-sizing: border-box;
      float: left;
      list-style: none;
    }
  }

  .card {
    height: 400px;
    width: 100%;
    background: var(--bg-color);
    border: 1px solid var(--border-color);
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: all 0.3s ease-in-out;
    bottom: 0;

    &:hover {
      box-shadow: 0px 12px 32px 4px rgba(237, 239, 245, 0.24),
        0px 8px 20px rgba(237, 239, 245, 0.48);
    }

    h3 {
      margin: 0;
      font-size: 18px;
      color: var(--el-text-color-primary);
      font-weight: normal;
    }

    p {
      font-size: 14px;
      color: #99a9bf;
      padding: 0 25px;
      line-height: 20px;
    }

    &:hover {
      bottom: 6px;
    }
  }
}

/* louvres */
@keyframes fadeIn {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.container li:nth-child(1) {
  animation-delay: 0s;
}
.container li:nth-child(2) {
  animation-delay: 0.1s;
}
.container li:nth-child(3) {
  animation-delay: 0.2s;
}
.container li:nth-child(4) {
  animation-delay: 0.3s;
}

.container li {
  opacity: 0;
  animation: fadeIn 0.3s ease-in forwards;
}

.dark {
  .home-page {
    .card {
      &:hover {
        box-shadow: 0px 12px 32px 4px rgba(9, 11, 16, 0.24),
          0px 8px 20px rgba(9, 11, 16, 0.48);
      }
    }
  }
}
</style>
