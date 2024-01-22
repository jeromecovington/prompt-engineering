// Summarize with a focus on shipping and delivery.

const { getCompletion } = require('../../lib/utils')
const { reviews } = require('./reviews')

const main = async () => {
  const prompt = `
Your task is to generate a short summary of a product
review from an ecommerce site to give feedback to the
Shipping deparmtment.

Summarize the review below, delimited by triple
backticks, in at most 30 words, and focusing on any aspects
that mention shipping and delivery of the product.

Review: \`\`\`${reviews[0]}\`\`\
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
