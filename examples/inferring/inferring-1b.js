// Sentiment (positive/negative)

const { getCompletion } = require('../../lib/utils')
const { review } = require('./review')

const main = async () => {
  const prompt = `
What is the sentiment of the following product review,
which is delimited with triple backticks?

Give your answer as a single word, either "positive"
or "negative".

Review text: \`\`\`${review}\`\`\`
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
