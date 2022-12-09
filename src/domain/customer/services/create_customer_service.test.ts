import 'reflect-metadata'
import Customer from "../model/customer"
import CustomerRepository from "../repository/customer_repository"
import CustomerService from "./create_customer_service"


jest.mock('src/domain/customer/model/customer')
const customerMock = Customer as jest.Mock<Customer>
const customerRepositoryMock = CustomerRepository as jest.Mock<CustomerRepository>

it('should StatusCode be 200 when handle() is calls', () => {

   const customer = new customerMock()
   const customerRepository = new customerRepositoryMock()
   const customerService = new CustomerService(customerRepository)
   customerService.create(customer)
   expect(customerRepository.create).toBeCalled
})