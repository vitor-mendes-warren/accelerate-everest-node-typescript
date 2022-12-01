
abstract class BaseModel {
  id?: number;
}

export default class Customer extends BaseModel {
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
