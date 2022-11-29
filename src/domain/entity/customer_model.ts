import ICustomer from './customer_entity'

export default class CustumerModel implements ICustomer {
  full_name: string
  email: string
  email_confirmation: string
  cpf: string
  cellphone: string
  birthdate: Date
  email_sms: boolean
  whatsapp: boolean
  country: string
  city: string
  postal_code: string
  address: string
}
