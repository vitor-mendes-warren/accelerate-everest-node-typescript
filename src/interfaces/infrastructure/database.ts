
import { Mongoose } from 'mongoose'

export interface IDatabaseClient {
  connect: () => Promise<any>
  close: () => Promise<any>
  getInstance: () => Mongoose
}
