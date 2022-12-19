import supertest from 'supertest'

import { app } from 'src'
import { bodyError, customerBody } from 'src/utils/mock'

const request = supertest(app)

describe('POST /customer', () => {
  it('should be return  body error with status code be 404   when calls /customer POST without body', async () => {
    const res = await request
      .post('/customer')
    expect(res.statusCode).toBe(404)
    expect(res.body).toStrictEqual(bodyError)
  })
  it('should be return created body  with status code be 200  when calls /customer POST with valid body', async () => {
    const res = await request
      .post('/customer').send(customerBody)
    expect(res.statusCode).toBe(200)
    expect(res.body.customer_created).toStrictEqual(customerBody)
  })
 
})
