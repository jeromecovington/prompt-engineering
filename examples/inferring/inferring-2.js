// Identify types of emotions.

const { getCompletion } = require('../../lib/utils')
const { review } = require('./review')

const main = async () => {
  const prompt = `
Identify a list of emotions that the writer of the
following review is expressing. Include no more than
five items in the list. Format your answer as a list of
lower-case words separated by commas.

Review text: \`\`\`${review}\`\`\`
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
