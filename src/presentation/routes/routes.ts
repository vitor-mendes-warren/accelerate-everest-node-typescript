import { Router } from 'express'
import customerRouter from './customer_router'
import SwaggerUI from 'swagger-ui-express'
import { join } from 'path'
import YAML from 'yamljs'

export const router = Router()
router.use('/docs', SwaggerUI.serve)
router.use('/customer', customerRouter)
router.get('/docs', SwaggerUI.setup(
  YAML.load(join(__dirname, '..', '..', '..', 'docs', 'swagger.yaml'))))

export default router
