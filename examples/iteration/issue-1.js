// Issue 1: The text is too long
// Limit the number of words/sentences/characters.

const { getCompletion } = require('../../lib/utils')
const { facts } = require('./fact-sheet')

const main = async () => {
  const prompt = `
Your task is to help a marketing team create a
description for a retail website of a product based
on a technical fact sheet.

Write a product description based on the information
provided in the technical specifications delimited by
triple backticks.

Use at most 50 words.

Technical specifications: \`\`\`${facts}\`\`\`
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
