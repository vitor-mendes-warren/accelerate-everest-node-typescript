
import { Router } from 'express'
import CreateCustomerController from '../../presentation/controllers/create_customer_controller'
import customerMiddleware from '../../presentation/middleware/customer/customer_middleware'
import { container } from 'tsyringe'

const customerRouter = Router()
const createUserController = container.resolve(CreateCustomerController)

customerRouter.post('/', customerMiddleware, createUserController.handle)

export default customerRouter
