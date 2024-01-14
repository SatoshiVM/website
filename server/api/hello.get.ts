export default defineEventHandler((event) => {
  const { name } = getQuery(event)
  return {
    data: `Hello ${name}`
  }
})
