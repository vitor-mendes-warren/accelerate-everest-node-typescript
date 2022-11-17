export class PersonController {
     speak(name?: string) {
          return `olá ${name?.toLocaleUpperCase() ?? 'Fulano'}!!`
     }
}
