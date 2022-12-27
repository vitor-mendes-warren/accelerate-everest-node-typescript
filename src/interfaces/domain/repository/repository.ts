export default interface IRepository<T> {
  list: (id: number) => void
  create: (entity: T) => void
}
