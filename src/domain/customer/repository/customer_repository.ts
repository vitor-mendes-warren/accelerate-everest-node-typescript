import IRepository from '@interfaces/domain/repository/repository'
import { Schema } from 'mongoose'
import MongoDBClient from 'src/infrastructure/mongodb/mongodb_client'
import { inject, injectable } from 'tsyringe'
import Customer from '../model/customer'
import customer_schema from '../model/schema/customer_schema'

@injectable()
export default class CustomerRepository implements IRepository<Customer> {
  constructor (
    @inject('DatabaseClient')
    private readonly dbClient: MongoDBClient
  ) { }

  read: (id: Schema.Types.ObjectId) => Promise<Customer | null>
  update: (id: Schema.Types.ObjectId) => Promise<Customer | null>
  readAll: () => Promise<[Customer]>
  delete: (id: Schema.Types.ObjectId) => Promise<Customer>

  public async create (customer: Customer): Promise<void> {
    await customer_schema.create(customer)
    // const CustomerModel = this.dbClient.getInstance().model('customerDataSchema', customerDataSchema)
    // const collection = new CustomerModel(customer)
    // await collection.save()
  }

  // public async read (id: Schema.Types.ObjectId): Promise<Customer | null> {
  //   const customerModel = this.dbClient.getInstance().model('customerDataSchema', customerDataSchema)
  //   return await customerModel.findOne(id)
  // }
}
