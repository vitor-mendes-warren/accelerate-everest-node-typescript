import { Request, Response } from 'express'
import { Interface } from 'readline'
import * as yup from 'yup'


interface ICustomer {
  full_name: string
  email: string
  email_confirmation: string
  cpf: string
  cellphone: string
  birthdate: string
  email_sms: boolean
  whatsapp: boolean
  country: string
  city: string
  postal_code: string
  address: string

}

const bodyValidation = yup.object().shape({

})

export class CustomerController{

  static handle(req: Request, res: Response) {
    return res.send(req.body)
   }
}
export default CustomerController