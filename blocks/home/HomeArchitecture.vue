<script lang="ts" setup>
const desInfos = [
  {
    label: '',
    content:
      'As depicted in the diagram, the SatoshiVM chain comprises three layers'
  },
  {
    label: 'Settlement Layer'.toUpperCase(),
    content:
      'This layer provides data availability, ordering, and validation of proofs for the SatoshiVM chain. It allows users and dApps to send messages and assets between Bitcoin and SatoshiVM. Bitcoin serves as the settlement layer, and bridges and rollup scripts are deployed on the Bitcoin network.'
  },
  {
    label: 'Sequencing Layer'.toUpperCase(),
    content:
      ' This layer consists of an execution node responsible for executing transactions submitted to the SatoshiVM sequencer and transactions submitted to the L1 bridge script, generating L2 blocks. It also includes a Rollup node that handles batched transactions, publishes transaction data and block information to Bitcoin to ensure data availability, and submits validity proofs to Bitcoin for finality.'
  },
  {
    label: 'Proving Layer'.toUpperCase(),
    content:
      'This layer comprises a coordinator, which assigns proof tasks to provers and relays the generated proofs to the Rollup node to complete finality verification on Bitcoin. It also includes a prover pool, responsible for generating validity proofs that verify the correctness of L2 transactions.'
  }
]

function openDoc () {
  window.open('https://docs.satoshivm.io', '_blank')
}
</script>

<template>
  <div class="home-architecture">
    <div v-motion-slide-visible-once-bottom class="title">
      <div>SatoshiVM</div>
      <div>ARCHITECTURE</div>
    </div>

    <div class="content">
      <div class="process">
        <img src="~/assets/images/BtcVM-Architecture.svg" alt="">
        <!-- <div class="process-item">

      </div>
      <div class="process-item"></div>
      <div class="process-item"></div> -->
      </div>

      <div class="des-content">
        <div v-for="(item, index) in desInfos" :key="index" class="des-item">
          <span v-if="item.label" class="label">{{ item.label }}</span>
          <span v-if="item.label">: </span>
          <span>{{ item.content }}</span>
        </div>
      </div>

      <div class="go-btn" @click="openDoc">
        <span>Read Details in Documents</span>
        <ArrowRightIcon :size="isPhone ? 24 : 47" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-architecture {
  width: 100%;

  .title {
    opacity: 1;
    color: $primary;
    font-family: 'IBMPlexMono-Bold';
    font-size: 60px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
    line-height: 60px;

    @include phone {
      font-size: 30px;
      line-height: 30px;
    }
  }

  .content {
    width: 100%;
    margin-top: 79px;
    @include flexCc;
    justify-content: flex-start;
    align-items: flex-start;

    @include phone {
      margin-top: 34px;
    }

    .process {
      width: 100%;
      height: 100%;
      max-height: 665px;
      img {
        width: 100%;
        height: 100%;
        max-height: 665px;
      }
      .process-item {
        width: 100%;
        height: 215px;
        border-radius: 8px;
        opacity: 1;
        background-color: rgba(26, 26, 26, 1);
        margin-bottom: 10px;
      }
    }

    .des-content {
      width: 100%;
      margin-top: 88px;

      @include phone {
        margin-top: 34px;
      }
      .des-item {
        width: 100%;
        opacity: 1;
        color: $onBackground;
        font-family: 'IBMPlexMono';
        font-size: 20px;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0px;
        text-align: left;
        line-height: 32px;
        margin-bottom: 40px;

        @include phone {
          font-size: 15px;
          line-height: 21px;
          margin-bottom: 20px;
        }
        .label {
          color: $primary;
          font-family: 'IBMPlexMono-Bold';
          font-weight: 700;
        }
      }
    }

    .go-btn {
      width: 100%;
      height: 106px;
      padding: 0 30px;
      flex-shrink: 0;
      border-radius: 8px;
      opacity: 1;
      background-color: $onBackground;

      opacity: 1;
      color: $background;
      font-family: 'IBMPlexMono-Bold';
      font-size: 28px;
      font-weight: 700;
      font-style: normal;
      letter-spacing: 0px;
      text-align: left;
      text-transform: uppercase;
      cursor: pointer;
      @include flexRsb;

      @include phone {
        height: 53px;
        font-size: 15px;
        padding: 0 19px;
      }
    }
  }
}
</style>
