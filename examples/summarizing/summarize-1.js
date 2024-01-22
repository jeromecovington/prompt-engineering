// Summarize with a word/sentence/character limit.

const { getCompletion } = require('../../lib/utils')
const { reviews } = require('./reviews')

const main = async () => {
  const prompt = `
Your task is to generate a short summary of a product
review from an ecommerce site.

Summarize the review below, delimited by triple
backticks, in at most 30 words.

Review: \`\`\`${reviews[0]}\`\`\
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
