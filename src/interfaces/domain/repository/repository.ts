export default interface IRepository<T> {
  create: (entity: T) => void
}
