import { Request, Response } from 'express'
import ICustomer from '../../domain/entity/customer_entity'
import CustomerService from '../../domain/services/customer_service'

const  customerList: ICustomer[] = [] 

export default class CustomerController{

  static async handle(req: Request, res: Response) {
    const userService = new CustomerService(customerList)
    const response = await userService.create(req.body)
    return res.status(response.code).json(response.data)

   }
}
