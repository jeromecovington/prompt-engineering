// Summarize with a focus on price and value.

const { getCompletion } = require('../../lib/utils')
const { reviews } = require('./reviews')

const main = async () => {
  const prompt = `
Your task is to generate a short summary of a product
review from an ecommerce site to give feedback to the
pricing deparmtment, responsible for determining the
price of the product.

Summarize the review below, delimited by triple
backticks, in at most 30 words, and focusing on any aspects
that are relevant to the price and perceived value.

Review: \`\`\`${reviews[0]}\`\`\
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
