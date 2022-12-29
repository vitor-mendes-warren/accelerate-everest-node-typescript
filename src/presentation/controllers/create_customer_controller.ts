import { Request, Response } from 'express'
import Customer from 'src/domain/customer/model/customer'
import { inject, injectable } from 'tsyringe'
import IController from '@interfaces/presentation/controllers/controller'
import IService from '@interfaces/domain/services/service'

@injectable()
export default class CreateCustomerController implements IController {
  constructor (
    @inject('CustomerService')
    private readonly customerService: IService<Customer>) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      this.customerService.create(req.body as Customer)
      return res.status(200).json({ status: 'sucess', customer_created: req.body as Customer })
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
