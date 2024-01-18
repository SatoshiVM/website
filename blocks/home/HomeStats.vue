<script setup>
const { $gsap } = useNuxtApp()
const { data, refresh } = await useAsyncData('statistic', () =>
  $fetch('/api/stats')
)
const addresses = ref(null)
const transactions = ref(null)
const btc = ref(null)

const defaultData = { ...data.value }

onMounted(() => {
  addresses.value.innerText = data.value.addresses.toLocaleString('en-US')
  transactions.value.innerText = data.value.transactions.toLocaleString('en-US')
  btc.value.innerText = data.value.btc.toLocaleString('en-US')
})
function refreshStat (oldValue, newValue, element, isBtc = false) {
  const obj = { num: oldValue }
  $gsap.to(obj, {
    num: newValue,
    duration: 2,
    ease: 'power1.in',
    snap: { num: isBtc ? 0.001 : 1 },
    onUpdate: () => {
      if (element.value) {
        element.value.innerText = isBtc
          ? obj.num.toFixed(3)
          : obj.num.toLocaleString('en-US')
      }
    }
  })
}
const counter = useInterval(10000)
watch(counter, () => {
  refresh()
})

watch(
  data,
  (newValue, oldValue) => {
    if (newValue.addresses > oldValue.addresses ?? 0) {
      refreshStat(oldValue.addresses ?? 0, newValue.addresses, addresses)
    }
    if (newValue.transactions > oldValue.transactions ?? 0) {
      refreshStat(
        oldValue.transactions ?? 0,
        newValue.transactions,
        transactions
      )
    }
    if (newValue.btc > oldValue.btc ?? 0) {
      refreshStat(oldValue.btc ?? 0, newValue.btc, btc, true)
    }
  },
  {
    // immediate: true
  }
)
</script>
<template>
  <div class="home-stats">
    <div class="stat-card">
      <span ref="addresses" class="stat-number">{{ defaultData.addresses }}</span>
      <span class="stat-description">Unique Wallets</span>
    </div>
    <div class="stat-card">
      <span ref="transactions" class="stat-number">{{ defaultData.transactions }}</span>
      <span class="stat-description">Blockchain Transactions</span>
    </div>
    <div class="stat-card">
      <span ref="btc" class="stat-number">{{ defaultData.btc }}</span>
      <span class="stat-description">BTC Bridged</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  @include phone {
    flex-direction: column;
  }
  .stat-card {
    font-weight: 500;
    min-width: 300px;
    @include flexC;
    align-items: center;
    @include phone {
      margin-top: 20px;
    }
    .stat-number {
      font-size: 50px;
      color: $primary;
      @include phone {
        font-size: 40px;
      }
    }
    .stat-description {
      font-size: 20px;
    }
  }
}
</style>
