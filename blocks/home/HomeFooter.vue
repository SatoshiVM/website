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
</script>

<template>
  <div v-motion-slide-visible-once-bottom class="home-footer">
    <div class="links">
      <a
        v-for="item in linkOptions"
        :key="item.id"
        class="link-item"
        :href="item.link"
        target="_blank"
      >
        <img
          :src="item.icon"
          alt=""
          class="icon"
          :class="{ x: item.id === 'x' }"
        >
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-footer {
  width: 100%;
  padding-bottom: 100px;

  @include phone {
    padding-bottom: 50px;
  }

  .links {
    @include flexRc;
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
      cursor: pointer;
      margin: 0 24px;

      @include phone {
        font-size: 12px;
        margin: 0 22px;
      }

      .icon {
        width: 50px;
        height: 50px;
        margin-left: 14px;
        object-fit: contain;

        &.x {
          width: 45px;
          height: 45px;
        }

        @include phone {
          width: 25px;
          height: 25px;
          margin-left: 7px;

          &.x {
            width: 22px;
            height: 22px;
          }
        }
      }
    }
  }
}
</style>
