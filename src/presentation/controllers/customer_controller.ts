import { Request, Response } from 'express'
import ICustomer from '@entity/customer_entity'
import CustomerService from '@services/customer_service'

const customerList: ICustomer[] = []

export default class CreateCustomerController {
  static handle (req: Request, res: Response): Response {
    const userService = new CustomerService(customerList)
    try {
      userService.create(req.body)
    } catch (error) {
      return res.status(400).json(error)
    }
    return res.status(200).json({ status: 'sucess', customer_created: req.body as ICustomer })
  }
}
