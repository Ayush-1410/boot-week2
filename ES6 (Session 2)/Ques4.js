// Write a program to implement a class having static functions


class Person {
    constructor(name) {
        this.name = name;
  }
    static greet(x) {
        return `Hello ${x.name}`;
  }
}

let per = new Person('Ayush');

console.log(Person.greet(per));
