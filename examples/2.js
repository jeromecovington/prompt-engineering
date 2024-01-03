require('dotenv').config()
const openai = require('openai')

const apiKey = process.env.OPENAI_API_KEY
openai.configure({ apiKey })

async function getCompletion (prompt, model = 'gpt-3.5-turbo') {
  const messages = [{ role: 'user', content: prompt }]

  try {
    const response = await openai.Completion.create({
      model,
      messages,
      temperature: 0 // This is the degree of randomness of the model's output
    })

    return response.choices[0].message.content
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

module.exports = {
  getCompletion
}
