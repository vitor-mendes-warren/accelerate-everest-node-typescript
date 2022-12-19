
import { Router } from 'express'
<<<<<<< HEAD
import CreateCustomerController from '../../presentation/controllers/create_customer_controller'
import customerMiddleware from '../../presentation/middleware/customer/customer_middleware'
=======
import CreateCustomerController from '@controller/create_customer_controller'
import customerMiddleware from '@middleware/customer/customer_middleware'
<<<<<<< HEAD
>>>>>>> 95c842673541ea1c4256c69781b8c1d982a794ea
=======
>>>>>>> 95c842673541ea1c4256c69781b8c1d982a794ea
import { container } from 'tsyringe'

const customerRouter = Router()
const createUserController = container.resolve(CreateCustomerController)

customerRouter.post('/', customerMiddleware, createUserController.handle)

export default customerRouter
