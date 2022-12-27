import { IDatabaseClient } from '@interfaces/infrastructure/database'
import { Db, MongoClient } from 'mongodb'

export default class MongoDBClient implements IDatabaseClient {
  public uri: string = (process.env.mongodb ?? 'mongodb://localhost:27017')
  private readonly client: MongoClient = new MongoClient(this.uri)
  private readonly database = this.client.db('typescript_api')

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
