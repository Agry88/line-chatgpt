import dotenv from 'dotenv'

dotenv.config()

export type Config = {
  channelAccessToken: string
  channelSecret: string
}

if (process.env.CHANNEL_ACCESS_TOKEN === undefined || process.env.CHANNEL_SECRET === undefined) {
  throw new Error('Specify CHANNEL_ACCESS_TOKEN in .env')
}

const config: Config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET
}

export default config
