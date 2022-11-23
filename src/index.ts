import { config } from 'dotenv'
import express, { Express, json } from 'express'
import router from '@routes/routes'
const app: Express = express()

app.use(json())
app.use(router)

config({ path: './config/config.env' })
const port = process.env.PORT ?? 8000

app.listen(port)
