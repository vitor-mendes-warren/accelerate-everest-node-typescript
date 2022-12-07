
import { Router } from 'express'
import CreateCustomerController from '@controller/create_customer_controller'
import middleware from '@middleware/customer/customer_middleware'
import { container } from 'tsyringe'

const customerRouter = Router()
const createUserController = container.resolve(CreateCustomerController)

customerRouter.post('/', middleware, createUserController.handle)

export default customerRouter
