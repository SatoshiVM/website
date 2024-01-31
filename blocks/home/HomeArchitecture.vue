<script lang="ts" setup>
const desInfos = [
  {
    label: '',
    content:
      'As depicted in the diagram, the SatoshiVM chain comprises three layers.'
  },
  {
    label: 'Settlement Layer (Bitcoin)'.toUpperCase(),
    content:
      'The settlement layer delivers the capacity for on-chain validation of the validity of SatoshiVM transactions, and the resultant verification outcomes are observable by all participants. Throughout the verification process, the digest of off-chain data is documented and preserved within this layer. It encompasses two dynamically generated taproot transactions, including Bit Commitments Taproot and Verification Taproot, tasked with accepting execution traces and conducting on-chain verification. '
  },
  {
    label: 'Sequencing Layer'.toUpperCase(),
    content:
      'Situated in this layer are the foundational nodes, which bear the responsibility of upholding the functionality of SatoshiVM. Temporarily, this layer can store all pertinent transactions and states, a validity that can be substantiated through on-chain data.'
  },
  {
    label: 'Proving Layer (Circuits)'.toUpperCase(),
    content:
      'This layer is responsible for generating proofs and plays a key role in verifying SatoshiVM transactions and states on Bitcoin. It generates transactions according to Bitcoin Taproot specifications, allowing the verification of SatoshiVM blocks on Bitcoin. Provers and nodes work together to transform data into specific taproot transactions and create execution traces where a node is capable of validating the entire process.'
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
        <img src="~/assets/images/architecture.svg" alt="">
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
        <ArrowRightIcon :size="isPhone ? 24 : 42" />
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
