<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import HomeCards from '../home/home-cards.vue'
import homeLocale from '../../../i18n/pages/home.json'

const target = ref<HTMLElement | null>(null)
const jumbotronRef = ref<HTMLElement | null>(null)
const { lang } = useData(), locale = homeLocale[lang.value]

onMounted(()=> {
  startTyping()
})

interface State {
  typingText: string;
  typingSuffixDisplay: boolean;
  typingSuffixSpeed: number;
  typingIndex: number;
  typingSpeed: number;
}

const state = reactive<State>({
  typingText: '',
  typingSuffixDisplay: true,
  typingSuffixSpeed: 3500,
  typingIndex: 0,
  typingSpeed: 30
});

function startTyping() {
  const title: string = locale['title']
  if (title.trim() === '') return

  // Simulate typing effect using setInterval
  const typingInterval = setInterval(() => {
    state.typingText += title[state.typingIndex]
    state.typingIndex++

    // If all characters have been printed, stop the typing effect.
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
          <h1 class="typewriting">
            {{ state.typingText }}
          </h1>
          <h1 :class="['typing-suffix', { 'typing-suffix_fade-out': !state.typingSuffixDisplay }]">
            <dot-svg w="8"/>
          </h1>
        </div>
        <p class="typography-site-body">
          {{ locale['title-sub'] }}
        </p>
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
        gap: 6px;

        h1 {
          color: var(--text-color);;
          margin: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 35px;
        }

        .typewriting {
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

  // jumbotron mobile adaptation
  @include down-to('md') {
    .jumbotron {
      width: 60%;

      .home-container {
        .title {
          gap: 5px;

          h1 {
            font-size: 18px;
          }

          svg {
            width: 19px;
            height: 19px;
          }

          .typing-suffix {
            width: 24px;
            height: 24px;
          }
        }

        .typography-site-body {
          font-size: 14px;
        }
      }
    }
  }

  @include down-to('sm') {
    .jumbotron {
      .home-container {
        .title {
          gap: 4px;

          h1 {
            font-size: 13px;
          }

          svg {
            width: 14px;
            height: 14px;
          }

          .typing-suffix {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }

  // cards mobile adaptation
  @include down-to('md') {
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

  @include down-to('sm') {
    .cards {
      li {
        margin: 10px auto;
      }
      .card {
        height: 230px;
        padding-bottom: 12px;
      }
    }
  }

  // p tag animation
  @keyframes slide-fadeIn {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .home-container p {
    opacity: 0;
    animation: slide-fadeIn 0.3s cubic-bezier(1, 0.5, 0.8, 1) forwards;
  }

  // typing-suffix ripple animation
  @keyframes ripple-fadeInOut {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  .typing-suffix {
    opacity: 1;
    transition: opacity 0.5s ease-in;

    animation: ripple-fadeInOut 2.5s infinite;
    background-color: var(--brand-color);
    border-radius: 50%;
    width: 38px;
    height: 38px;

    &_fade-out {
      opacity: 0;
    }
  }

}
</style>
