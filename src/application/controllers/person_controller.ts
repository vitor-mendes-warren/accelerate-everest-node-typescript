
export class PersonController {
  speak (name?: string): string {
    return `olá ${name?.toLocaleUpperCase() ?? 'Fulano'}!!`
  }
}
