// task https://www.codewars.com/kata/basic-subclasses-adam-and-eve/
class God {
  static create() {
    return [new Man(), new Woman()]
  }
};
class Human {};
class Man extends Human {};
class Woman extends Human {};

// task https://www.codewars.com/kata/56ff9b53140fcca90b000530/

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true);
  }
};

// task  https://www.codewars.com/kata/55a144eff5124e546400005a

class Person {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  get info() {
    return `${this.name}s age is ${this.age}`
  }
};
