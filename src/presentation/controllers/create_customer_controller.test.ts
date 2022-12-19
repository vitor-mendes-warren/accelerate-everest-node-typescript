import 'reflect-metadata'
import CustomerService from 'src/domain/customer/services/create_customer_service'
import CreateCustomerController from './create_customer_controller'
import { mockRequest, mockResponse } from 'src/utils/mock'
import CustomerRepository from 'src/domain/customer/repository/customer_repository'

jest.mock('src/domain/customer/services/create_customer_service')
jest.mock('src/domain/customer/repository/customer_repository')
jest.mock('src/domain/customer/model/customer')

const req = mockRequest
const res = mockResponse

describe('UserController', () => {
  describe('handle', () => {
    it('should StatusCode be 200 when handle is calls with valid body', () => {
      const customerService = new CustomerService(new CustomerRepository())
      const createCustomerController = new CreateCustomerController(customerService)
      createCustomerController.handle(req, res)
      expect(res.statusCode).toBe(200)
    })
  })
})
