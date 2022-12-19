import 'reflect-metadata'
import './shared/container/'
import { config } from 'dotenv'
import express, { Express, json } from 'express'
<<<<<<< HEAD
import router from './presentation/routes/routes'
=======
import router from '@routes/routes'
<<<<<<< HEAD
>>>>>>> 95c842673541ea1c4256c69781b8c1d982a794ea
=======
>>>>>>> 95c842673541ea1c4256c69781b8c1d982a794ea
export const app: Express = express()

app.use(json())
app.use(router)

config({ path: './config/config.env' })
const port = process.env.PORT ?? 8000

app.listen(port)
