import { Request, Response } from 'express'
import Customer from 'src/domain/customer/model/customer'
import { inject, injectable } from 'tsyringe'
import IController from '@interfaces/presentation/controllers/controller'
import IService from '@interfaces/domain/services/service'
import { ObjectID } from 'bson'

@injectable()
export default class DeleteCustomerController implements IController {
  constructor (
    @inject('CustomerService')
    private readonly customerService: IService<Customer>) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const customerDeleted = await this.customerService.delete(new ObjectID(req.params.id))
      return res.status(200).json({ status: 'sucess', info: customerDeleted })
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
