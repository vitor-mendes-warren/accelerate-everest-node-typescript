import { config } from 'dotenv'
import express, { Express, json } from 'express'
import router from './presentation/routes/routes'
const app: Express = express()


app.use(router)
app.use(json())

config({ path: './config/config.env' })
const port = process.env.PORT ?? 8000

app.listen(port, () => {
 console.log(`fodase? ${port}`)
})
