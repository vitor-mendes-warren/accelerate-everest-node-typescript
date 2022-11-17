class Person {
     speak(name?: string) {
          return `olá ${name?.toLocaleUpperCase() ?? 'Fulano'}""`
     }
}

const p = new Person();
p.speak('rodrigo')
p.speak();