export default interface IRepository<T> {
   create(customer: T): Promise<void>
};