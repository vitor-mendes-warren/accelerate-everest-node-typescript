import IRepository from '@interfaces/domain/repository/repository'
import { IDatabaseClient } from '@interfaces/infrastructure/database'
import { Collection, DeleteResult, ObjectId } from 'mongodb'
import { inject, injectable } from 'tsyringe'
import Customer from '../model/customer'

@injectable()
export default class CustomerRepository implements IRepository<Customer> {
  private readonly collection: Collection<Customer>
  constructor (
    @inject('DatabaseClient')
    public dbClient: IDatabaseClient
  ) {
    this.collection = dbClient.getInstance().collection<Customer>('Customer')
    void this.collection.createIndex({ email: 1 }, { unique: true })
    void this.collection.createIndex({ cpf: 1 }, { unique: true })
  }

  public async getAll (): Promise<Customer[]> {
    return await this.collection.find().toArray()
  }

  public async delete (_id: ObjectId): Promise<Customer | Object> {
    const customerDeleted = await this.collection.deleteOne({ _id })
    if (customerDeleted.deletedCount === 0) { return { error: 'customer_not_found' } } else { return customerDeleted }
  }

  public async create (customer: Customer): Promise<void> {
    void this.collection.insertOne(customer)
  }

  // public async getById (_id: Schema.Types.ObjectId): Promise< Customer | null > {
  // }

  // public async update(_id: Schema.Types.ObjectId, update: UpdateFilter<Document>): Promise<Customer | null> {
  // }
}
