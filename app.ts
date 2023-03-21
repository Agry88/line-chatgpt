import * as line from '@line/bot-sdk'
import express from 'express'
import config from './src/helpers/config'
import handleLineEvent from './src/helpers/line/setupLineClient'

const app = express()
app.post('/webhook', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleLineEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err)
      res.status(500).end()
    })
})

app.listen(3000)
