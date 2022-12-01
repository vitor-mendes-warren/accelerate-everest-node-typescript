
import { Router } from 'express'
import CreateCustomerController from '@controller/create_customer_controller'
import customerMiddleware from '@middleware/customer/customer_middleware'

const customerRouter = Router()
const createUserController = new CreateCustomerController()

customerRouter.post('/', customerMiddleware, createUserController.handle)

export default customerRouter
