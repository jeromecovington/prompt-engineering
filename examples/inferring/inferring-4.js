// Extract product and company name from customer reviews.

const { getCompletion } = require('../../lib/utils')
const { review } = require('./review')

const main = async () => {
  const prompt = `
Identify the following items from the review text:
- Item purchased by reviewer
- Company that made the item

The review is delimited with triple backticks.
Format your response as a JSON object with
"item" and "brand" as the keys.

If the information isn't present, use "unknown"
as the value.

Make your response as short as possible.

Review text: \`\`\`${review}\`\`\`
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
