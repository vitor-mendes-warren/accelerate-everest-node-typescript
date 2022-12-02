export default interface IService<T> {
  create: (entity: T) => void
}
