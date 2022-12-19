import Customer from 'src/domain/customer/model/customer'
import CustomerRepository from 'src/domain/customer/repository/customer_repository'
import IRepository from '@interfaces/domain/repository/repository'
import { container } from 'tsyringe'
import CustomerService from 'src/domain/customer/services/create_customer_service'
import IService from '@interfaces/domain/services/service'
import IController from '@interfaces/presentation/controllers/controller'
import CreateCustomerController from '../../presentation/controllers/create_customer_controller'

container.registerSingleton<IRepository<Customer>>(
  'CustomerRepository',
  CustomerRepository
)
container.registerSingleton<IService<Customer>>(
  'CustomerService',
  CustomerService
)
container.registerSingleton<IController>(
  'CreateCustomerController',
  CreateCustomerController
)
