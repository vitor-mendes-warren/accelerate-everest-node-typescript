import { IDatabaseClient } from '@interfaces/infrastructure/database'
import { config } from 'dotenv'
import { Db } from 'mongodb'
import mongoose from 'mongoose'
config({ path: './config/config.env' })

export default class MongoDBClient implements IDatabaseClient {
  public uri: string = (process.env.mongodbUrl ?? 'mongodb://localhost:27017/warren-backend')

  public async connect (): Promise<void> {
    mongoose.set('strictQuery', true)
    await mongoose.connect(this.uri)
  }

  public async close (): Promise<void> {
    await mongoose.connection.close()
  }

  public getInstance (): Db {
    return mongoose.connection.db
  }
}
