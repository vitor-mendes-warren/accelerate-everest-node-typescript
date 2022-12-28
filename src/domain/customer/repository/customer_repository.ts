import IRepository from '@interfaces/domain/repository/repository'
import { UpdateFilter } from 'mongodb'
import { Schema } from 'mongoose'
import { injectable } from 'tsyringe'
import Customer from '../model/customer'
import customer_schema from '../model/schema/customer_schema'

@injectable()
export default class CustomerRepository implements IRepository<Customer> {
  public async getAll (): Promise<Customer[]> {
    return await customer_schema.find()
  }

  public async delete (_id: Schema.Types.ObjectId): Promise<Customer | null> {
    return await customer_schema.findOneAndDelete(_id)
  }

  public async create (customer: Customer): Promise<void> {
    await customer_schema.create(customer)
  }

  public async getById (_id: Schema.Types.ObjectId): Promise< Customer | null > {
    return await customer_schema.findOne(_id)
    
  }

  public async update(_id: Schema.Types.ObjectId, update: UpdateFilter<Document>): Promise<Customer | null> {
    return await customer_schema.updateOne({ _id }, update);
  }
  
}
