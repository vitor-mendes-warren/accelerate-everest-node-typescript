import supertest from 'supertest'

import { app } from 'src'
import { bodyError, customerBody } from 'src/utils/mock'

const request = supertest(app)

describe('POST /customer', () => {
  it('should status code be 404 when calls /customer POST without body', async () => {
    const res = await request
      .post('/customer')
    expect(res.statusCode).toBe(404)
  })
  it('should return invalid body error calls /customer POST without body', async () => {
    const res = await request
      .post('/customer')
    expect(res.body).toStrictEqual(bodyError)
  })
  it('should status code be 200  when calls /customer POST with valid body', async () => {
    const res = await request
      .post('/customer').send(customerBody)
    expect(res.statusCode).toBe(200)
  })
  it('should return created body  when calls /customer POST with valid body', async () => {
    const res = await request
      .post('/customer').send(customerBody)
    expect(res.body.customer_created).toStrictEqual(customerBody)
  })
})
