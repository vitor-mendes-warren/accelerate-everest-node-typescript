import Customer from 'src/domain/customer/model/customer'
import IRepository from '@interfaces/domain/repository/repository'
import { inject, injectable } from 'tsyringe'
import IService from '@interfaces/domain/services/service'

@injectable()
export default class CustomerService implements IService<Customer> {
  constructor (
    @inject('CustomerRepository')
    private readonly customerRepository: IRepository<Customer>) { }

  public create (customer: Customer): void {
    this.customerRepository.create(customer)
  }
}
