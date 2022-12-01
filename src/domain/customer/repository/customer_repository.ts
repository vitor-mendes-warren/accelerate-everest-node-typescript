import IRepository from 'src/interfaces/domain/customer/repository/repository'
import Customer from '../model/customer'

export default class CustomerRepository implements IRepository<Customer> {
  private readonly customers: Customer[] = []

  public create (customer: Customer): void {
    try {
      this.customers.push(customer)
    } catch (error) {

    }
  }
}
