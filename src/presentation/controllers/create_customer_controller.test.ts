import 'reflect-metadata'
import CustomerService from 'src/domain/customer/services/create_customer_service'
import CreateCustomerController from './create_customer_controller'
import { mockRequest, mockResponse } from 'src/utils/mock';

jest.mock('src/domain/customer/services/create_customer_service')
jest.mock('src/domain/customer/repository/customer_repository')
jest.mock('src/domain/customer/model/customer')

const customerServiceMock = CustomerService as jest.Mock<CustomerService>

const req = mockRequest 
const res = mockResponse
describe('UserController', () => {

  it('should StatusCode be 200 when handle() is calls', () => {
    const customerService = new customerServiceMock()
    const createCustomerController = new CreateCustomerController(customerService)
    createCustomerController.handle(req, res)
    expect(res.statusCode).toBe(200)
  })
})
