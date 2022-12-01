import IRepository from "src/interfaces/domain/customer/repository/repository";
import Customer from "../model/customer";

export default class CustomerRepository implements IRepository<Customer> {
   private customers: Customer[] = []

   public async create(customer: Customer): Promise<void> {
      try {
         this.customers.push(customer)
      } catch (error) {
         return;
      }
   }

}