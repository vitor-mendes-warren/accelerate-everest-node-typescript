import { ObjectId } from 'mongoose'

export default interface IRepository<T> {
  create: (entity: T) => void
  read: (id: ObjectId) => Promise<T | null>
  update: (id: ObjectId) => Promise<T | null>
  readAll: () => Promise<[T]>
  delete: (id: ObjectId) => Promise<T>
}
