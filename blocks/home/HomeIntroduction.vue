<script lang="ts" setup>
import xIcon from '~/assets/images/x.png'
import discordIcon from '~/assets/images/discord.png'
import githubIcon from '~/assets/images/github.png'

const linkOptions = [
  { id: 'x', label: 'X', icon: xIcon, link: 'https://twitter.com/SatoshiVM' },
  {
    id: 'github',
    label: 'GITHUB',
    icon: githubIcon,
    link: 'https://github.com/SatoshiVM'
  },
  {
    id: 'discord',
    label: 'DISCORD',
    icon: discordIcon,
    link: 'https://discord.gg/satoshivm'
  }
]

const desText1 = ref('')
const desText2 = ref('')
const initDesText1 =
  'Decentralized Bitcoin ZK Rollup Layer2 that is compatible with the EVM ecosystem and uses native BTC as gas.'
const initDesText2 =
  'SatoshiVM introduces the EVM ecosystem to BTC, granting the Bitcoin ecosystem the capability to issue assets and build applications.'

const generateText = async () => {
  const text1 = initDesText1.split('')
  const text2 = initDesText2.split('')

  for (const i in text1) {
    if (i.toString() === '0') {
      desText1.value = desText1.value + text1[i]
    } else {
      await new Promise((resolve) => {
        setTimeout(() => {
          desText1.value = desText1.value + text1[i]
          resolve('')
        }, 5)
      })
    }
  }

  for (const i in text2) {
    if (i.toString() === '0') {
      desText2.value = desText2.value + text2[i]
    } else {
      await new Promise((resolve) => {
        setTimeout(() => {
          desText2.value = desText2.value + text2[i]
          resolve('')
        }, 20)
      })
    }
  }
}

const tips = [
  'ZK EVM',
  'ZK Rollup',
  'BTC Native Gas',
  'Data Availability',
  'ZK Fraud Proofs'
]
const currentTip = ref(tips[0])
const dynamicText = ref('')
const nowTipIndex = ref<number | undefined>()
const loading = ref(false)
const timer = ref<NodeJS.Timeout | undefined>()

const randomCoding = (count: number): string => {
  const arr = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
  let idValue = ''

  for (let i = 0; i < count; i++) {
    idValue += arr[Math.floor(Math.random() * 26)]
  }
  return idValue
}
const onStartIsTip = async () => {
  if (loading.value) {
    return
  }

  if (timer.value) {
    clearInterval(timer.value)
    timer.value = undefined
  }
  const index = nowTipIndex.value
  if (index === undefined) {
    nowTipIndex.value = 0
  } else if (index >= tips.length - 1) {
    nowTipIndex.value = 0
  } else {
    nowTipIndex.value = index + 1
  }
  currentTip.value = ''
  const text = tips[nowTipIndex.value ?? 0].split('')
  loading.value = true
  for (const i in text) {
    await new Promise((resolve) => {
      let isEnd = false
      const setDynamic = () => {
        if (isEnd) {
          return
        }
        setTimeout(() => {
          dynamicText.value = randomCoding(
            text.length - currentTip.value.length
          )
          if (isEnd) {
            return
          }

          setDynamic()
        }, 50)
      }

      dynamicText.value = randomCoding(text.length - Number(i))

      setDynamic()
      setTimeout(() => {
        isEnd = true
        resolve('')
      }, 500)
    })

    currentTip.value += text[i].toUpperCase()
  }
  loading.value = false
  dynamicText.value = ''

  timer.value = setInterval(() => {
    if (!loading.value) {
      onStartIsTip()
    }
  }, 3000)
}

onMounted(() => {
  generateText()
  onStartIsTip()
})

onScopeDispose(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
})
</script>

<template>
  <div id="home-top" class="home-introduction">
    <div class="infos">
      <div v-motion-slide-visible-once-top class="title">
        SatoshiVM
      </div>
      <div v-motion-slide-visible-once-bottom class="tip">
        <span>With</span>
        <span class="primary" @click="onStartIsTip">
          <span class="text">
            {{ currentTip + dynamicText }}
          </span>
          <span style="opacity: 0">{{ tips[nowTipIndex ?? 0] }}</span>
        </span>
      </div>

      <div class="desc">
        <span>{{ desText1 }}</span>
        <br v-if="desText2">
        <span>{{ desText2 }}</span>
        <CursorBox :height="20" :width="6" :color="'rgb(165 165 165)'" />
      </div>
    </div>
    <div v-motion-slide-visible-once-top class="links">
      <a
        v-for="(item, i) in linkOptions"
        :key="item.id"
        v-motion
        :initial="{
          opacity: 0,
          y: -50
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 200,
            ease: 'easeIn'
          }
        }"
        class="link-item"
        :href="item.link"
        target="_blank"
      >
        <div class="label">
          {{ item.label }}
        </div>
        <img :src="item.icon" alt="" class="icon">
      </a>
    </div>
    <video src="/btcvm.mp4" autoplay muted loop class="video-card" />
  </div>
</template>

<style lang="scss" scoped>
.code,
.code {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent 5%, #ff7800 5%);
  outline: transparent;
  border: 0;
  box-shadow: 6px 0px 0px #ff7800;
  position: relative;
}

.code {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background: linear-gradient(
  //   45deg,
  //   transparent 3%,
  //   #00e6f6,
  //   #00e6f6 5%,
  //   #ff013c 5%
  // );
  text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #ff7800;
  clip-path: var(--slice-0);

  animation: glicpth 1s;
  animation-iteration-count: infinite;
  animation-timing-function: steps(2, end);

  &.code-2 {
    top: -20px;
    left: 20px;
  }
}

@keyframes glicpth {
  0% {
    clip-path: var(--slice-3);
    transform: translate(10px, 5px);
  }
  10% {
    clip-path: var(--slice-5);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-2);
    transform: translate(-10px, -10px);
  }
  30% {
    clip-path: var(--slice-4);
    transform: translate(0px, 10px);
  }
  40% {
    clip-path: var(--slice-3);
    transform: translate(5px, 10px);
  }
  50% {
    clip-path: var(--slice-2);
    transform: translate(10px, 5px);
  }
  60% {
    clip-path: var(--slice-5);
    transform: translate(0px, 5px);
  }
  70% {
    clip-path: var(--slice-1);
    transform: translate(10px, 10px);
  }
  80% {
    clip-path: var(--slice-0);
    transform: translate(10px, 5px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(10px, 0px);
  }
  100% {
    clip-path: var(--slice-3);
    transform: translate(10px, 5px);
  }
}

.desc {
  color: $onBackground;
  margin-top: 13px;
  opacity: 1;
  font-family: 'IBMPlexMono';
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-align: left;
  text-wrap: pretty;

  @include phone {
    width: 100%;
    font-size: 15px;
    margin-top: 10px;
  }
}
.video-card {
  height: 800px;
  position: absolute;
  top: 300px;
  z-index: -1;
  width: min(100%, 1000px);
  @include phone {
    height: 400px;
  }
}
.home-introduction {
  width: 100%;
  margin-bottom: 700px;
  @include flexRsb;
  position: relative;
  align-items: flex-start;

  .infos {
    width: 722px;
    @include phone {
      width: auto;
    }
    .title {
      font-size: 100px;
      color: $primary;
      font-weight: 700;
      font-family: 'IBMPlexMono-Bold';

      @include phone {
        font-size: 44px;
      }
    }

    .tip {
      height: 82px;
      color: $onPrimary;
      margin-top: 16px;
      opacity: 1;
      font-family: 'IBMPlexMono';
      font-size: 50px;
      font-weight: 400;
      font-style: normal;
      letter-spacing: 0px;
      text-align: left;

      @include phone {
        height: 25px;
        font-size: 20px;
      }

      .primary {
        margin-left: 28px;
        cursor: pointer;
        position: relative;
        user-select: none;
        background-color: $primary;

        .text {
          position: absolute;
          top: 0;
          left: 0;
        }

        @include phone {
          margin-left: 14px;
        }
      }
    }
  }

  .links {
    .link-item {
      color: $primary;
      opacity: 1;
      font-family: 'IBMPlexMono-Bold';
      font-size: 20px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: 0px;
      text-align: right;
      text-transform: uppercase;
      @include flexRc;
      justify-content: flex-end;
      align-items: flex-start;
      margin-bottom: 14px;
      cursor: pointer;

      @include phone {
        font-size: 12px;
        margin-bottom: 7px;
      }

      .icon {
        width: 50px;
        height: 50px;
        margin-left: 14px;
        object-fit: contain;

        @include phone {
          width: 25px;
          height: 25px;
          margin-left: 7px;
        }
      }
    }
  }
}
</style>
