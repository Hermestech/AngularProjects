const username: string = "HAAC";

const sum = (a: number, b: number) => {
  return a + b;
}
sum(5,5);

class Person {
  age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const Hermes = new Person(25, "Aguilar");
