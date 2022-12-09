import { Request, Response } from 'express';
import Customer from 'src/domain/customer/model/customer';
export const mockResponse = {
   send: function () { },
   json: function () { },
   status: function (code) {
      this.statusCode = code;
      return this;
   }
} as Response
export const mockRequest = {
   body: Customer
} as Request