import { IDatabaseClient } from '@interfaces/infrastructure/database'
import { config } from 'dotenv'
import { Db, MongoClient } from 'mongodb'
config({ path: './config/config.env' })

export default class MongoDBClient implements IDatabaseClient {
  public uri: string = (process.env.mongodbUrl ?? 'mongodb://localhost:27017/')

  private readonly client: MongoClient = new MongoClient(this.uri)
  private readonly database = this.client.db('warren-backend')

  public async connect (): Promise<void> {
    await this.client.connect()
  }

  public async close (): Promise<void> {
    await this.client.close()
  }

  public getInstance (): Db {
    return this.database
  }
}
