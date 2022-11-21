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

const bodyValidation: yup.SchemaOf<ICustomer> = yup.object().shape({
   full_name: yup.string().required().min(3),
})