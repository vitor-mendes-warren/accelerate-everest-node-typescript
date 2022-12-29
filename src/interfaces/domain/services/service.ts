import { DeleteResult, ObjectId } from 'mongodb'

export default interface IService<T> {
  create: (entity: T) => void
  getAll: () => Promise<T[]>
  delete: (_id: ObjectId) => Promise<T | DeleteResult>
}
