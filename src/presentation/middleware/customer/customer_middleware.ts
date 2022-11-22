import * as yup from 'yup'
import { NextFunction, Request, Response } from 'express'
import { bodyValidation } from './customer_schema'

export default async function customerMiddleware (req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await bodyValidation.validate(req.body, { abortEarly: false })
  } catch (error) {
    const yupError = error as yup.ValidationError
    const errors: Record<string, string> = {}
    yupError.inner.forEach(error => {
      if (error.path != null) {
        errors[error.path] = error.message
      }
    })
    res.status(404).json({
      errors
    })
    return
  }
  next()
}
