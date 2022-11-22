import { Router } from 'express'
import CustomerController from '../controllers/customer_controller'
import customerMiddleware from '../middleware/customer/customer_middleware'

const customerRouter = Router()

customerRouter.post('/', customerMiddleware, CustomerController.handle)

export default customerRouter
