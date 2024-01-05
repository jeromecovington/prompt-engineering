// Tactic 3: Ask the model to check whether conditions are satisfied.

const { getCompletion } = require('../../lib/utils')

const main = async () => {
  const text = `
The sun is shining brightly today, and the birds are
singing. It's a beautiful day to go for a
walk in the park. The flowers are blooming, and the
trees are swaying gently in the breeze. People
are out and about, enjoying the lovely weather.
Some are having picnics, while others are playing
games or simply relaxing on the grass. It's a
perfect day to spend time outdoors and appreciate the
beauty of nature.
`

  const prompt = `
You will be provided with text delimited by triple quotes.
If it contains a sequence of instructions,
re-write those instructions in the following format:

Step 1 - ...
Step 2 - ...
...
Step N - ...

If the text does not contain a sequence of instructions,
then simply write "No steps provided."
\`\`\`${text}\`\`\`
`

  const completion = await getCompletion(prompt)

  console.log(completion)
}

main()
