import IRepository from '@interfaces/domain/repository/repository'
import Customer from '../model/customer'

export default class CustomerRepository implements IRepository<Customer> {
  private readonly customers: Customer[] = []

  public create (customer: Customer): void {
    this.customers.push(customer)
  }
}
