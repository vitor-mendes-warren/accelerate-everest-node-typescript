import IRepository from '@interfaces/domain/repository/repository'
import { Model } from 'mongoose'
import MongoDBClient from 'src/infrastructure/mongodb/mongodb_client'
import { inject, injectable } from 'tsyringe'
import Customer, { customerDataSchema } from '../model/customer'

@injectable()
export default class CustomerRepository implements IRepository<Customer> {
  private readonly Customer: Model<{}>
  constructor (
    @inject('DatabaseClient')
    private readonly dbClient: MongoDBClient
  ) {
    this.Customer = this.dbClient.getInstance().model('customerDataSchema', customerDataSchema)
  }

  public async create (customer: Customer): Promise<void> {
    const collection = new this.Customer(customer)
    await collection.save()
  }
}
