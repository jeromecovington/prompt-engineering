// Issue 2. Text focuses on the wrong details
// Ask it to focus on the aspects that are relevant to the intended audience.

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

The description is intended for furniture retailers,
so should be technical in nature and focus on the
materials the product is constructed from.

At the end of the description, include every 7-character
Product ID in the technical specification.

Use at most 50 words.

Technical specifications: \`\`\`${facts}\`\`\`
`
  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
