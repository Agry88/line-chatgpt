import * as line from '@line/bot-sdk'
import type { WebhookEvent } from '@line/bot-sdk'
import config from './config'

export default async function handleLineEvent (event: WebhookEvent): Promise<line.MessageAPIResponseBase | null> {
  const client = new line.Client(config)
  if (event.type !== 'message' || event.message.type !== 'text') {
    return await Promise.resolve(null)
  }

  return await client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text
  })
}
