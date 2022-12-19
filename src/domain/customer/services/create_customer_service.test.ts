import 'reflect-metadata'
import Customer from '../model/customer'
import CustomerRepository from '../repository/customer_repository'
import CustomerService from './create_customer_service'

jest.mock('src/domain/customer/model/customer')

const customerMock = Customer as jest.Mock<Customer>
const CustomerRepositoryMock = CustomerRepository as jest.Mock<CustomerRepository>

describe('CustomerService', () => {
  describe('Create', () => {
    it('should call create with valid body when CustomerRepository.create is called ', () => {
      const customer = customerMock()
      const customerRepository = new CustomerRepositoryMock()
      const customerService = new CustomerService(customerRepository)
      const spy = jest.spyOn(customerRepository, 'create')
      customerService.create(customer)
      expect(spy).toHaveBeenCalled()
    })
  })
})
