import { Router } from 'express'
import CreateCustomerController from '../../presentation/controllers/create_customer_controller'
import customerMiddleware from '../../presentation/middleware/customer/customer_middleware'
import { container } from 'tsyringe'
import GetAllCustomerController from '@controller/get_alll_customer_controller'
import DeleteCustomerController from '@controller/delete_customer_controller'
// import DeleteCustomerController from '@controller/delete_customer_controller'

const customerRouter = Router()

const createCustomerController = container.resolve(CreateCustomerController)
const getAllCustomerController = container.resolve(GetAllCustomerController)
const deleteCustomerController = container.resolve(DeleteCustomerController)
customerRouter.post('/', customerMiddleware, createCustomerController.handle)
customerRouter.get('/', getAllCustomerController.handle)
customerRouter.delete('/:id', deleteCustomerController.handle)

export default customerRouter
