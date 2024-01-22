// Try "extract" instead of "summarize".

const { getCompletion } = require('../../lib/utils')
const { reviews } = require('./reviews')

const main = async () => {
  const prompt = `
Your task is to extract relevant information from
a product review from an ecommerce site to give
feedback to the Shipping department.

From the review below, delimited by triple quotes
extract the information relevant to shipping and
delivery. Limit to 30 words.

Review: \`\`\`${reviews[0]}\`\`\
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
