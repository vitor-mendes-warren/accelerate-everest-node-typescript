import ICustomer from '@entity/customer_entity'
import CustomerModel from '@entity/customer_model'

export default class CustomerService {
  users: CustomerModel[]
  constructor (customers: CustomerModel[]) {
    this.users = customers
  }

  public create (customer: ICustomer): void {
    this.users.push(customer)
  }
}
