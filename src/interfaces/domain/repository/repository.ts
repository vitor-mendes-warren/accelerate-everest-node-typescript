import { ObjectId } from 'mongodb'

export default interface IRepository<T> {
  create: (entity: T) => void
  getAll: () => Promise<T[]>
  delete: (_id: ObjectId) => Promise<T | Object>
}
