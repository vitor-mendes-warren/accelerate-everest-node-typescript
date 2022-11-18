import { Router } from 'express'
import CustomerController from '../controllers/customer_controller'

const customerRouter = Router()

customerRouter.get('/', CustomerController.handle)

export default  customerRouter
