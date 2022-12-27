import { IDatabaseClient } from '@interfaces/infrastructure/database'
import { config } from 'dotenv'
import { Mongoose } from 'mongoose'
config({ path: './config/config.env' })

export default class MongoDBClient implements IDatabaseClient {
  public uri: string = (process.env.mongodbUrl ?? 'mongodb://localhost:27017/warren-backend')
  private readonly client: Mongoose = new Mongoose()
  private readonly database = this.client.connection.db
  public async connect (): Promise<void> {
    this.client.set('strictQuery', true)
    await this.client.connect(this.uri)
  }

  public async close (): Promise<void> {
    await this.client.connection.close()
  }

  public getInstance (): Mongoose {
    return this.client
  }
}
