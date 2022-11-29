
import { Router } from 'express'
import CreateCustomerController from '@controller/customer_controller'
import customerMiddleware from '@middleware/customer/customer_middleware'

const customerRouter = Router()

customerRouter.post('/', customerMiddleware, CreateCustomerController.handle)

export default customerRouter
