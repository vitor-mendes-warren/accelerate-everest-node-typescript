import * as yup from 'yup'
import ICustomer from '../../../domain/entity/customer_entity'
import { parse } from 'date-fns'

// const isoDate = ({ format = 'yyyy-MM-dd' } = {}) =>
//    Date().ransform(function (_, originalValue) {
//       // Parses the date using `date-fns` `parse` method if it's not nil
//       return maybeParseDate(format, originalValue)
//    })


// function _parseDateString(originalValue: string) {

//    if (isDate(originalValue) === true) {
//       return originalValue   
//    } else {
//       return (parse(originalValue, "dd/MM/yyyy", new Date()))
//    }
//    // const parsedDate = isDate(originalValue) === true
//    //    ? originalValue
//    //    : parse(originalValue, "dd/MM/yyyy", new Date())

//    // return parsedDate
// }

enum cpfMaxMin { 'max' = 14, 'min' = 11 };
enum phoneMaxMin { 'max' = 15, 'min' = 11 };
enum postalCodeMaxMin { 'max' = 9, 'min' = 8 };



const today = new Date() 

export  const bodyValidation: yup.SchemaOf<ICustomer> = yup.object().shape({
   full_name: yup.string().required().min(5),
   email: yup.string().required().email(),
   email_confirmation: yup.string().required().email(),
   address: yup.string().required(),
   birthdate: yup.date()
      .transform(function (value, originalValue) {
         if (this.isType(value)) {
            return value
         }
         const result = parse(originalValue, "dd.MM.yyyy", new Date())
         return result
      })
      .required().max(today),
   cellphone: yup.string().min(phoneMaxMin.min).max(phoneMaxMin.max).required(),
   city: yup.string().required(),
   whatsapp: yup.bool().required(),
   email_sms: yup.bool().required(),
   country: yup.string().required(),
   cpf: yup.string().min(cpfMaxMin.min).max(cpfMaxMin.max).required(),
   postal_code: yup.string().min(postalCodeMaxMin.min).max(postalCodeMaxMin.max).required(),

})
