class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log("print from base class");
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  print() {
    console.log("print from child class");
  }
}

const student = new Student("John", 20);

student.print();
