import Customer from 'src/domain/customer/model/customer'
import CustomerRepository from 'src/domain/customer/repository/customer_repository'
import IRepository from '@interfaces/domain/repository/repository'
import { container } from 'tsyringe'
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import CustomerService from 'src/domain/customer/services/create_customer_service'
import IService from '@interfaces/domain/services/service'
import IController from '@interfaces/presentation/controllers/controller'
import CreateCustomerController from '../../presentation/controllers/create_customer_controller'
>>>>>>> Stashed changes
=======
import CustomerService from 'src/domain/customer/services/create_customer_service'
import IService from '@interfaces/domain/services/service'
import IController from '@interfaces/presentation/controllers/controller'
import CreateCustomerController from '@controller/create_customer_controller'
>>>>>>> 95c842673541ea1c4256c69781b8c1d982a794ea

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
