import { Configuration, OpenAIApi } from 'openai'
import getErrorMessage from '../utils/getErrorMessage'

export default async function getChatGPTResponse (message: string): Promise<string> {
  try {
    const configuration = new Configuration({
      organization: process.env.OPENAI_ORGANIZATION,
      apiKey: process.env.OPENAI_API_KEY
    })
    const openai = new OpenAIApi(configuration)

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }]
    })

    const response = completion?.data?.choices[0].message?.content
    if (response === undefined) return "I'm sorry, The server seems have to issue."

    return response
  } catch (error) {
    console.error(JSON.stringify(error))
    return `
    I'm sorry, The server seems have to issue,
    error message is: ${getErrorMessage(error)}
    `
  }
}
