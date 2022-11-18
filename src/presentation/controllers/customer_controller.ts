import { Request, Response } from 'express'

export class CustomerController{

  static  handle(req: Request, res: Response) {
     return res.status(200).send('')
   }
}
export default CustomerController