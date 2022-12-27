import IRepository from '@interfaces/domain/repository/repository'
import { ObjectID, ObjectId } from 'bson'
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

  public async list (id: ObjectID): Promise<any> {
    return await new Promise((resolve, reject) => {
      Model.find({ id })
        .exec(function (err, data) {
          if (err) reject(err)
          resolve(data)
        })
    })
  }
}
