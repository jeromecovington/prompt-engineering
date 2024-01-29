// Infer 5 topics.

const { getCompletion } = require('../../lib/utils')
const { story } = require('./story')

const main = async () => {
  const prompt = `
Determine five topics that are being discussed in the
following text, which is delimited by triple backticks.

Make each item one or two words long.

Format your response as a list of items separated by commas.

Text sample: \`\`\`${story}\`\`\`
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
