// Do multiple tasks at once.

const { getCompletion } = require('../../lib/utils')
const { review } = require('./review')

const main = async () => {
  const prompt = `
Identify the following items from the review text:
- Sentiment (positive or negative)
- Is the reviewer expressing anger? (true or false)
- Item purchased by reviewer
- Company that made the item

The review is delimited with triple backticks.
Format your response as a JSON object with
"sentiment", "anger", "item" and "brand" as the keys.

If the information isn't present, use "unknown"
as the value.

Make your response as short as possible.
Format the Anger value as a boolean.

Review text: \`\`\`${review}\`\`\`
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
