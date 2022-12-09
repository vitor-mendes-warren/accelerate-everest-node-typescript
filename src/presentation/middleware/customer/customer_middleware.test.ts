import customerMiddleware from "./customer_middleware"
import { NextFunction} from 'express';
import { mockRequest, mockResponse } from "src/utils/mock";

const req = mockRequest
const res = mockResponse

describe('customerMiddleware', () => {
   const next = jest.fn() as NextFunction;

   it('shold call a next function when  request body is filled ', () => {
      customerMiddleware(req, res, next)
      expect(next).toBeCalled
   })
   it('shold not call a next function when request body is empty', () => {
      mockRequest.body = {};
      customerMiddleware(req, res, next)
      expect(next).not.toBeCalled  
   })
})