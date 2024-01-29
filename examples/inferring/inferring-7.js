// Make a news alert for certain topics.

const { getCompletion } = require('../../lib/utils')
const { story, topics } = require('./story')

const main = async () => {
  const prompt = `
Determine whether each item in the following list of
topics is a topic in the text below, which
is delimited with triple backticks.

Give your answer as list with 0 or 1 for each topic.

List of topics: ${topics.join(", ")}

Text sample: \`\`\`${story}\`\`\`
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
