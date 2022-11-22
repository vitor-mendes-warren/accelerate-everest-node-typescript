
import { Router } from 'express'

import customerRouter from './customer_router'

export const router = Router()

router.use('/customer', customerRouter)

export default router
