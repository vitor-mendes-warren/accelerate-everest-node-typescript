import { Schema } from 'mongoose'
import BaseModel from './base_model'

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

export const customerDataSchema = new Schema({
  full_name: String,
  email: String,
  email_confirmation: String,
  cellphone: String,
  birthdate: String,
  email_sms: Boolean,
  whatsapp: Boolean,
  country: String,
  city: String,
  cpf: String,
  postal_code: String,
  address: String
}, { collection: 'Customer' })
