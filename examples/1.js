require('dotenv').config()
const openai = require('openai')

const apiKey = process.env.OPENAI_API_KEY
openai.configure({ apiKey })
