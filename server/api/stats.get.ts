import NodeFetchCache, { MemoryCache } from 'node-fetch-cache'
const fetch = NodeFetchCache.create({ cache: new MemoryCache({ ttl: 10000 }) })
const fetcher = (url: string) => fetch(url).then(res => res.json())

export default defineEventHandler(async (_) => {
  const config = useRuntimeConfig()
  try {
    const [data, balance] = await Promise.all([
      fetcher(config.explorerApi + '/stats'),
      fetcher(
        config.btcApi + '/address/tb1q7y4e54ujq3xqlvmghwmaade48qdam8xwf47kr9'
      )
    ])
    const formateBalance =
      (Number(balance.chain_stats.funded_txo_sum) +
        Number(balance.mempool_stats.funded_txo_sum)) /
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
