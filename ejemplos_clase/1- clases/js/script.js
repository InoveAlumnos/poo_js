"use strict";

console.log("----------------------------------------");
console.log("Crear clase User");

class User {
    constructor(name, lastName) {
      this.name = name;
      this.lastName = lastName;
    }
}

const user1 = new User('Jose', 'Paredes');
const user2 = new User('Pablo', 'Pinto');

console.log("Acceder a los atributos de User");
console.log(user1.name) // output: 'Jose'
console.log(user1.lastName) // output: 'Paredes'

console.log("----------------------------------------");
console.log("Crear clase User con métodos");

// Creamos el método "gusto"
class User2 {
    constructor(name, lastName) {
      this.name = name;
      this.lastName = lastName;
    }
    // Método con retorno
    hablar() {
        return `Hola, mi nom es ${this.name}`;
    }
    // Método con parámetros y retorno
    gusto(gusto){
        return `Mi gusto de helado favorito es ${gusto}`
    }
}

const user3 = new User2('Jose', 'Paredes');
console.log(user3.hablar()); // output: Hola, mi nombre es Jose
console.log(user3.gusto("chocolate"));

console.log("----------------------------------------");
console.log("Herencia con animales");

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`${this.name} está durmiendo`);
    }
    speak(){
        console.log(`${this.name} está hablando`);
    }
}

class Dog extends Animal{
    constructor(name, age,){
        super(name,age);  
    }
    speak(){
        console.log(`${this.name} dice guau guau`);
    }
}

const dog= new Dog('Fatiga', 2);
dog.speak(); // Fatiga habla

