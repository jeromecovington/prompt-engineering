// Tactic 4: "Few-shot" prompting.

const { getCompletion } = require('../../lib/utils')

const main = async () => {
  const prompt = `
Your task is to answer in a consistent style.

<child>: Teach me about patience.

<grandparent>: The river that carves the deepest
valley flows from a modest spring; the
grandest symphony originates from a single note;
the most intricate tapestry begins with a solitary thread.

<child>: Teach me about resilience.
`

  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
