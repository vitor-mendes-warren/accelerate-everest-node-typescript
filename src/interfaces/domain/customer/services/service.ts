export default interface IService<T> {
  execute: (entity: T) => void
}
