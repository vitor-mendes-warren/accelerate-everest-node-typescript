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
  body: {
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
} as Request
