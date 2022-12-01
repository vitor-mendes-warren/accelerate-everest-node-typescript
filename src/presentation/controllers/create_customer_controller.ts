import { Request, Response } from 'express'
import Customer from 'src/domain/customer/model/customer'
import CustomerService from 'src/domain/customer/services/create_customer_service'
import { container } from 'tsyringe'
import IController from '@interfaces/presentation/controllers/controller'

export default class CreateCustomerController implements IController {
  handle (req: Request, res: Response): Response {
    const userService = container.resolve(CustomerService)
    try {
      userService.execute(req.body as Customer)
      return res.status(200).json({ status: 'sucess', customer_created: req.body as Customer })
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
