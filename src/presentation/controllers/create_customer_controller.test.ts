import 'reflect-metadata'
import CustomerService from 'src/domain/customer/services/create_customer_service'
import CreateCustomerController from './create_customer_controller'
import {Request, Response } from 'express';
import Customer from 'src/domain/customer/model/customer';

jest.mock('src/domain/customer/services/create_customer_service')
jest.mock('src/domain/customer/repository/customer_repository')
jest.mock('src/domain/customer/model/customer')

const customerServiceMock = CustomerService as jest.Mock<CustomerService>


const   mockRequest = {
  body: Customer
} as Request 

const mockResponse = {
  send: function () {},
  json: function () {},
  status: function (code) {
    this.statusCode = code;
    return this;
  }
} as Response
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
