<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import HomeCards from '../home/home-cards.vue'
import homeLocale from '../../../i18n/pages/home.json'

const target = ref<HTMLElement | null>(null)
const jumbotronRef = ref<HTMLElement | null>(null)
const { lang } = useData(), locale = homeLocale[lang.value]

onMounted(()=> {
  setTimeout(() => state.subTextDisplay = true , 100);
  startTyping()
})

interface State {
  typingText: string;
  subTextDisplay: boolean;
  typingSuffixDisplay: boolean;
  typingSuffixSpeed: number;
  typingIndex: number;
  typingSpeed: number;
}

const state = reactive<State>({
  typingText: '',
  subTextDisplay: false,
  typingSuffixDisplay: true,
  typingSuffixSpeed: 500,
  typingIndex: 0,
  typingSpeed: 30
});

function startTyping() {
  const title: string = locale['title']
  if (title.trim() === '') return

  // 使用 setInterval 来模拟打字效果
  const typingInterval = setInterval(() => {
    state.typingText += title[state.typingIndex]
    state.typingIndex++

    // 如果所有字符都已打印完毕，停止打字效果
    if (state.typingIndex >= title.length) {
      clearInterval(typingInterval)
      setTimeout(()=> state.typingSuffixDisplay = false, state.typingSuffixSpeed)
    }
  }, state.typingSpeed)
}

</script>

<template>
  <div ref="target" class="home-page">
    <div ref="jumbotronRef" class="jumbotron">
      <div class="home-container">
        <div class="title">
          <h1 class="typewriter">
            {{ state.typingText }}
          </h1>
          <h1 :class="['typing-suffix', { 'typing-suffix_fade-out': !state.typingSuffixDisplay }]">
            <dot-svg w="8"/>
          </h1>
        </div>
        <transition name="slide-fade">
          <p v-show="state.subTextDisplay" class="typography-site-body">
            The all-new iPad Pro packs astonishing power into an unbelievably thin, light, and portable design. Push the limits of what’s possible on iPad with a superportable 11-inch model and an expansive 13-inch model that is the thinnest product Apple has ever created.
          </p>
        </transition>
      </div>
    </div>
    <HomeCards />
  </div>
</template>

<style lang="scss">
@use 'docs/.vitepress/vitepress/styles/mixins' as *;

.home-page {
  .jumbotron {
    max-width: 653.33px;
    margin: 20px auto;

    .home-container {
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;

        h1 {
          color: var(--text-color);;
          margin: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 35px;
        }

        .typewriter {
          transition: all 1s ease;
        }
      }

      p {
        text-align: center;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        unicode-bidi: isolate;
      }

      .typography-site-body {
        font-size: 21px;
        line-height: 1.381002381;
        font-weight: 600;
        letter-spacing: .011em;
      }
    }
  }

  .typing-suffix {
    opacity: 1;
    transition: opacity 0.8s ease-out;

    &_fade-out {
      opacity: 0;
    }
  }

  .slide-fade-enter-active {
    transition: all 1s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }

  @media (max-width: 768px) {
    .jumbotron {
      width: 60%;
    }

    .home-container {
      .title {
        h1 {
          font-size: 19px !important;
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
      .typography-site-body {
        font-size: 14px !important;
      }
    }
  }

  @media (max-width: 480px) {
    .home-container {
      .title {
        h1 {
          font-size: 12px !important;
        }
        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .cards {
      li {
        width: 80%;
        margin: 20px auto;
        float: none;
      }
      .card {
        height: auto;
        padding-bottom: 54px;
      }
    }
  }


}
</style>
