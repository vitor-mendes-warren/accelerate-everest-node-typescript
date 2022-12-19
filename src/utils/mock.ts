/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Request, Response } from 'express'
import Customer from 'src/domain/customer/model/customer'
export const mockResponse = {
  send: function () { },
  json: function () { },
  status: function (code) {
    this.statusCode = code
    return this
  }
} as Response
export const mockRequest = {
  body: Customer
} as Request
<<<<<<< HEAD

export const bodyError = {
  errors: {
    address: 'address is a required field',
    birthdate: 'birthdate is a required field',
    cellphone: 'cellphone is a required field',
    city: 'city is a required field',
    country: 'country is a required field',
    cpf: 'cpf is a required field',
    email: 'email is a required field',
    email_confirmation: 'email_confirmation is a required field',
    email_sms: 'email_sms is a required field',
    full_name: 'full_name is a required field',
    postal_code: 'postal_code is a required field',
    whatsapp: 'whatsapp is a required field'
  }
}
export const customerBody = {

  full_name: 'Vitor Daniel wwmendes',
  email: 'email@gmail.com',
  email_confirmation: 'email@gmail.com',
  cellphone: '12312312332',
  birthdate: '03-06-2000',
  email_sms: false,
  whatsapp: true,
  country: 'Brasil',
  city: 'Blumenau',
  cpf: '101.568.999-06',
  postal_code: '89031222',
  address: 'rua floripa'

}
=======
>>>>>>> 95c842673541ea1c4256c69781b8c1d982a794ea
