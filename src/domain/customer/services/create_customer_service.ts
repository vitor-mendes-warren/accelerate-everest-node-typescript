import Customer from 'src/domain/customer/model/customer'
import IRepository from '@interfaces/domain/repository/repository'
import { inject, injectable } from 'tsyringe'
import IService from '@interfaces/domain/services/service'
import { ObjectId } from 'mongodb'

@injectable()
export default class CustomerService implements IService<Customer> {
  constructor (
    @inject('CustomerRepository')
    private readonly customerRepository: IRepository<Customer>) { }

  public async create (customer: Customer): Promise<void> {
    this.customerRepository.create(customer)
  }

  public async getAll (): Promise<Customer[]> {
    return await this.customerRepository.getAll()
  }

  public async delete (_id: ObjectId): Promise<Customer | Object> {
    return await this.customerRepository.delete(_id)
  }
}
