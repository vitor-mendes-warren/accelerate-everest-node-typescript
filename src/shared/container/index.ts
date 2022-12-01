import Customer from "src/domain/customer/model/customer";
import CustomerRepository from "src/domain/customer/repository/customer_repository";
import IRepository from "src/interfaces/domain/customer/repository/repository";
import { container } from "tsyringe";



container.registerSingleton<IRepository<Customer>>(
   "CustomerRepository",
   CustomerRepository
)