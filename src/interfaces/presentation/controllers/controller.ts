
export default interface IController {
   handle(req: Request, res: Response): Response
}