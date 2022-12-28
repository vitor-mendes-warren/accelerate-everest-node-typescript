import mongoose from 'mongoose'

const CustomerSchema = new mongoose.Schema({
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

export default mongoose.model('customerSchema', CustomerSchema)
