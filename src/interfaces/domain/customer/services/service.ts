interface IService<T> {
  execute(entity: T): Promise<void>
}
