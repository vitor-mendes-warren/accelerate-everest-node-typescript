import ICustomer from '../entity/customer_entity'
import CustomerModel from '../entity/customer_model'

interface ICustomersResponse {
  code: number
  data?: {}
}

export default class CustomerService {
  users: CustomerModel[]
  constructor (customers: CustomerModel[]) {
    this.users = customers
  }

  public async create (customer: ICustomer): Promise<ICustomersResponse> {
    this.users.push(customer)
    return { code: 201, data: { status: 'sucess', customer_added: customer } }
  }
}
