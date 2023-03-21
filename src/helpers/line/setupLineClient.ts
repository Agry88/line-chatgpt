import * as line from '@line/bot-sdk'
import type { WebhookEvent } from '@line/bot-sdk'
import config from '../config'
import getChatGPTResponse from '../getChatGPTResponse'

export default async function handleLineEvent (event: WebhookEvent): Promise<line.MessageAPIResponseBase | null> {
  const client = new line.Client(config)
  if (event.type !== 'message' || event.message.type !== 'text') {
    return await Promise.resolve(null)
  }

  const userText = event.message.text
  const botText = await getChatGPTResponse(userText)

  return await client.replyMessage(event.replyToken, {
    type: 'text',
    text: botText.trim()
  })
}
