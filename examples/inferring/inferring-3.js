// Identify anger.

const { getCompletion } = require('../../lib/utils')
const { review } = require('./review')

const main = async () => {
  const prompt = `
Is the writer of the following review expressing anger?
The review is delimited with triple backticks.
Give your answer as either yes or no.

Review text: \`\`\`${review}\`\`\`
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
