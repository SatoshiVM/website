export default defineEventHandler(async (_) => {
  try {
    const response = await fetch(
      'https://original-testnet.svmscan.io/api/v2/stats'
    )
    const data = await response.json()
    const balance = await fetch(
      'https://mempool.space/testnet/api/address/tb1q7y4e54ujq3xqlvmghwmaade48qdam8xwf47kr9'
    )
    const balanceData = await balance.json()
    const formateBalance =
      (Number(balanceData.chain_stats.funded_txo_sum) +
        Number(balanceData.mempool_stats.funded_txo_sum)) /
      100000000
    return {
      addresses: Number(data.total_addresses),
      transactions: Number(data.total_transactions),
      btc: Number(formateBalance.toFixed(3))
    }
  } catch (error) {
    console.log(error)
    return {
      addresses: 120891,
      transactions: 521280,
      btc: 528.796
    }
  }
})
