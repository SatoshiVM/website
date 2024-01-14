<script lang="ts" setup>
import { vElementHover } from '@vueuse/components'

import DoneIcon from '~/components/icons/DoneIcon.vue'
import LoopArrowIcon from '~/components/icons/LoopArrowIcon.vue'
import SafetyIcon from '~/components/icons/SafetyIcon.vue'
import InterconnectIcon from '~/components/icons/InterconnectIcon.vue'

const sideOptions = [
  {
    id: 'simplicity',
    label: 'Simplicity',
    icon: DoneIcon
  },
  {
    id: 'sustainability',
    label: 'Sustainability',
    icon: LoopArrowIcon
  },
  {
    id: 'fraudProof',
    label: 'Fraud Proof',
    icon: SafetyIcon
  },
  {
    id: 'powBased',
    label: 'PoW Based',
    icon: InterconnectIcon
  }
]

const contentInfos: { [key: string]: string } = {
  simplicity:
    'Designing with maximum simplicity is one of the primary objectives of SatoshiVM. SatoshiVM is a versatile ZK Rollup that employs EVM for off-chain computations. This implies that users can interact with SatoshiVM in a manner similar to interacting with Ethereum, and developers can build on top of SatoshiVM just as they would on Ethereum. This simplicity provides SatoshiVM with several notable advantages compared to more complex Layer 2 implementations.',
  sustainability:
    "SatoshiVM is intended for long-term, sustainable operation. Application developers need to ensure that the platform they build remains viable and competitive over an extended period. The design process of SatoshiVM is centered around the idea of long-term sustainability rather than taking shortcuts in scalability. Ultimately, a scalable system is meaningless if it doesn't sustain its ecosystem.",
  fraudProof:
    'SatoshiVM utilizes ZK Rollup technology to bundle multiple transactions into a single batch and validate them on the Bitcoin main network as a single transaction.SatoshiVM employs native BTC as gas for the EVM. Even though SatoshiVM is an experiment the aim is to add value to the native BTC network.',
  powBased:
    'While SatoshiVM may appear as a standalone blockchain, it is ultimately designed as an extension of Bitcoin. This fact is kept in mind every time we create new features or attempt to simplify existing ones. SatoshiVM can achieve the same level of security as Bitcoin while maintaining simplicity without altering the consensus rules of the Bitcoin network.'
}

const sideActive = ref(sideOptions[0].id)
const activeContent = ref('')

const onChanged = () => {
  const text = contentInfos[sideActive.value]
  activeContent.value = text
}

const onSelect = (info: (typeof sideOptions)[0]) => {
  if (info.id && sideActive.value !== info.id) {
    sideActive.value = info.id
  }
}
const onHover = useDebounceFn((item) => {
  onSelect(item)
}, 100)

watch(sideActive, () => onChanged(), {
  immediate: true
})
</script>

<template>
  <div class="home-table">
    <div v-motion-slide-visible-once-bottom class="title">
      <div>SatoshiVM</div>
      <div>DESIGN</div>
      <div>PHILOSOPHY</div>
    </div>

    <div class="table">
      <div
        class="side"
        :class="{
          'side-0': sideOptions[0].id === sideActive,
          'side-1': sideOptions[1].id === sideActive,
          'side-2': sideOptions[2].id === sideActive,
          'side-3': sideOptions[3].id === sideActive
        }"
      >
        <ClientOnly>
          <div
            v-for="(item, i) in sideOptions"
            :key="item.id"
            class="side-item"
            :class="{
              active: sideActive === item.id,
              first: i === 0,
              end: i === sideOptions.length - 1,
              activeTop:
                i < sideOptions.length - 1 &&
                sideOptions[i + 1].id === sideActive,
              activeBottom: i > 0 && sideOptions[i - 1].id === sideActive
            }"
            @click="onSelect(item)"
          >
            <div
              v-element-hover="() => onHover(item)"
              class="wrapper"
              :class="{ [`wrapper-${i}`]: true }"
            >
              <component :is="item.icon" :is-active="sideActive === item.id" />
              <div class="label">
                {{ item.label }}
              </div>
            </div>

            <div
              v-if="isPhone && sideActive === item.id"
              class="content"
              :class="{
                isFirstOfActive: sideOptions[0].id === sideActive,
                isEndOfActive:
                  sideOptions[sideOptions.length - 1].id === sideActive,
                'wrapper-0': sideOptions[0].id === sideActive,
                'wrapper-1': sideOptions[1].id === sideActive,
                'wrapper-2': sideOptions[2].id === sideActive,
                'wrapper-3': sideOptions[3].id === sideActive
              }"
            >
              <span>{{ activeContent }}</span>
              <CursorBox :height="15" :width="4" :color="'rgb(165 165 165)'" />
            </div>
          </div>
        </ClientOnly>
      </div>

      <div
        v-if="!isPhone"
        class="content desktop"
        :class="{
          isFirstOfActive: sideOptions[0].id === sideActive,
          isEndOfActive: sideOptions[sideOptions.length - 1].id === sideActive,
          'wrapper-0': sideOptions[0].id === sideActive,
          'wrapper-1': sideOptions[1].id === sideActive,
          'wrapper-2': sideOptions[2].id === sideActive,
          'wrapper-3': sideOptions[3].id === sideActive
        }"
      >
        <span>{{ activeContent }}</span>
        <!-- <CursorBox :height="20" :width="6" :color="'rgb(165 165 165)'" /> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-table {
  width: 100%;

  .title {
    opacity: 1;
    color: $onBackground;
    font-family: 'IBMPlexMono-Bold';
    font-size: 60px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
    line-height: 60px;
    margin-bottom: 30px;

    @include phone {
      font-size: 30px;
      line-height: 30px;
    }
  }

  .table {
    width: 100%;
    @include flexRc;
    border-radius: 8px;
    overflow: hidden;
    align-items: flex-start;
    // background-color: $secondary;
    position: relative;

    .side {
      width: 423px;
      background-color: $secondary;

      &.side-0 {
        background-color: #282828;
        margin-top: 0;
      }
      &.side-1 {
        background-color: #5d3c1e;
      }
      &.side-2 {
        background-color: #995213;
      }
      &.side-3 {
        background-color: #e56e05;
      }

      @include phone {
        width: 100%;
        background-color: transparent !important;
      }
      .side-item {
        width: 100%;
        height: 116px;
        @include flexRc;
        justify-content: flex-start;
        border-radius: 8px;
        position: relative;
        padding: 10px 10px 0 0;
        cursor: pointer;
        user-select: none;
        // background-color: $background;

        @include phone {
          padding: 5px 0 0 0;
          height: 58px;
        }

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: $background;

          @include phone {
            background-color: transparent;
          }
        }

        .wrapper {
          width: 100%;
          height: 100%;
          padding-left: 25px;
          @include flexRc;
          align-items: center;
          justify-content: flex-start;
          border-radius: 8px;
          z-index: 1;

          @include phone {
            height: 53px;
            padding-left: 10px;
          }

          :deep() {
            g {
              mix-blend-mode: overlay;
            }
          }

          :deep() svg {
            width: 48px !important;
            height: 48px !important;

            @include phone {
              width: 20px !important;
              height: 20px !important;
            }
          }

          .label {
            margin-left: 23px;
            color: rgba(255, 255, 255, 1);
            font-family: 'IBMPlexMono';
            font-size: 34px;
            font-weight: 400;
            font-style: normal;
            letter-spacing: 0px;
            text-align: left;
            line-height: 60px;
            mix-blend-mode: overlay;
            z-index: 1;

            @include phone {
              font-size: 15px;
              line-height: 30px;
              margin-left: 11px;
            }
          }
          &.wrapper-0 {
            background-color: #282828;
            margin-top: 0;
          }
          &.wrapper-1 {
            background-color: #5d3c1e;
          }
          &.wrapper-2 {
            background-color: #995213;
          }
          &.wrapper-3 {
            background-color: #e56e05;
          }
        }

        &.first {
          height: 106px !important;
          padding: 0 10px 0 0;

          @include phone {
            padding: 0;
            height: 53px !important;
          }

          &.activeTop {
            height: 116px !important;
            padding: 0 10px 10px 0;

            @include phone {
              height: 58px !important;
              padding: 0 0 5px 0;
            }

            &::before {
              border-radius: 0 0 8px 0;
              @include phone {
                border-radius: 8px;
              }
            }
          }
        }

        &.activeTop {
          height: 126px;
          padding: 10px 10px 10px 0;

          @include phone {
            height: 63px;
            padding: 5px 0 5px 0;
          }
          &::before {
            border-radius: 0 0 8px 0;
            @include phone {
              border-radius: 8px;
            }
          }
        }

        &.activeBottom {
          &::before {
            border-radius: 0 8px 0 0;
            @include phone {
              border-radius: 8px;
            }
          }
        }

        &.active {
          width: 100%;
          height: 106px;
          padding: 0;
          border-radius: 0 8px 8px 0;

          &.end {
            ::after {
              content: '';
              width: 20px;
              height: 100%;
              background-color: #e56e05;
              position: absolute;
              right: -10px;
              top: 0px;

              @include phone {
                display: none;
              }
            }
          }

          @include phone {
            height: auto !important;
            border-radius: 8px;
            @include flexCc;
            align-items: flex-start;
            justify-content: flex-start;
            // background-color: $secondary;
          }

          .wrapper {
            // background-color: $secondary;
            border-radius: 8px 0px 0px 8px;

            @include phone {
              border-radius: 8px 8px 0 0;
            }

            .label {
              mix-blend-mode: inherit;
            }

            :deep() {
              g {
                mix-blend-mode: inherit;
              }
            }
          }

          @include phone {
            .content {
              border-radius: 0 0 8px 8px !important;
            }
          }
        }
      }
    }

    .content {
      width: calc(100% - 423px);
      min-height: calc(106px * 4 + 30px);
      opacity: 1;
      color: $onBackground;
      font-family: 'IBMPlexMono';
      font-size: 20px;
      font-weight: 400;
      font-style: normal;
      letter-spacing: 0px;
      text-align: left;
      line-height: 32px;
      padding: 27px 36px;
      background-color: $secondary;
      border-radius: 8px;
      // transition: 0.2s;

      @include phone {
        width: 100%;
        height: auto;
        padding: 10px;
        font-size: 15px;
        line-height: 21px;
        min-height: initial;
      }

      &.desktop {
        @include phone {
          display: none;
        }
      }

      &.isFirstOfActive {
        border-radius: 0 8px 8px 8px;
      }

      &.isEndOfActive {
        border-radius: 8px 8px 8px 8px;
      }

      &.wrapper-0 {
        background-color: #282828;
        margin-top: 0;
      }
      &.wrapper-1 {
        background-color: #5d3c1e;
      }
      &.wrapper-2 {
        background-color: #995213;
      }
      &.wrapper-3 {
        background-color: #e56e05;
      }
    }
  }
}
</style>
