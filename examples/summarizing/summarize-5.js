// Summarize multiple product reviews.

const { getCompletion } = require('../../lib/utils')
const { reviews } = require('./reviews')

const main = async () => {
  for await (const review of reviews) {
    const prompt = `
Your task is to generate a short summary of a product \
review from an ecommerce site.

Summarize the review below, delimited by triple \
backticks in at most 20 words.

Review: \`\`\`${review}\`\`\
`
    const completion = await getCompletion(prompt)

    console.log(completion)
  }
}

main()
