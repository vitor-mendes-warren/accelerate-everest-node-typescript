import Customer from 'src/domain/customer/model/customer';
import CustomerModel from 'src/domain/customer/model/customer'
import IRepository from 'src/interfaces/domain/customer/repository/repository';
import "@interfaces/domain/customer/services/service"
import { inject, injectable } from 'tsyringe';


@injectable()
export default class CustomerService implements IService<Customer> {

  constructor(
    @inject("CustomerRepository")
    private customerRepository: IRepository<Customer>) { }

  public execute(customer: Customer): void {
    this.customerRepository.create(customer)
  }
}
