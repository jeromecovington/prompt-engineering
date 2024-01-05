// Tactic 2: Ask for a structured output

const { getCompletion } = require('../lib/utils')

const main = async () => {
  const prompt = `
Generate a list of three made-up book titles along
with their authors and genres.
Provide them in JSON format with the following keys:
book_id, title, author, genre.
`

  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
