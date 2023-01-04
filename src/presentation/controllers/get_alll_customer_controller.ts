import { Request, Response } from 'express'
import Customer from 'src/domain/customer/model/customer'
import { inject, injectable } from 'tsyringe'
import IController from '@interfaces/presentation/controllers/controller'
import IService from '@interfaces/domain/services/service'

@injectable()
export default class GetAllCustomerController implements IController {
  constructor (
    @inject('CustomerService')
    private readonly customerService: IService<Customer>) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const customerList = await this.customerService.getAll()
      return res.status(200).json(customerList)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
