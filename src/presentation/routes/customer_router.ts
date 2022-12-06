
import { Router } from 'express'
import CreateCustomerController from '@controller/create_customer_controller'
import middleware from '@middleware/customer/customer_middleware'

const customerRouter = Router()
const createUserController = new CreateCustomerController()

customerRouter.post('/', middleware, createUserController.handle)

export default customerRouter
