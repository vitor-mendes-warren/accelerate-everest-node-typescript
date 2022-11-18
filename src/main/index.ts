import { PersonController } from '../application/controllers/person_controller'

const person = new PersonController()
console.log(person.speak('Romarinho'))
console.log(person.speak())
