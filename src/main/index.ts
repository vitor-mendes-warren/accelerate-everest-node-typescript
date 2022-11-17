import { PersonController } from '../application/controllers/person_controller.js';

const person = new PersonController();
console.log(person.speak('Romarinho'));
console.log(person.speak());