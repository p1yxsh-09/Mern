// class Human {
//   // propeties

//   ht = 180;
//   #wt = 20; //-> private
//   age;

//   constructor(newAge, newHeight, newWeight) {
//     this.age = newAge;
//     this.ht = newHeight;
//     this.#wt = newWeight;
//   }
//   // behaviour

//   walking() {
//     console.log("I am Wlking ", this.#wt);
//   }
//   running() {
//     console.log("Run you fatasss");
//   }

//   get fetch() {
//     return this.#wt;
//   }

//   set modify(val) {
//     this.#wt = val;
//   }
// }
// // initializing the value of constructor , we had to pass the value as arguments in the object
// let obj = new Human(50, 190, 88);

// console.log(obj.ht);
// console.log(obj.age);
// console.log(obj.fetch);

// obj.walking();

// ----------------------------------------------->Default parametre<-------------------------------

//  here we put a default parameter in case we didnt give an arghument while calling so that we can use this

// function sayName(myName = "Piyush") {
//   console.log("My name is : ", myName);
// }

// sayName("Ram jii");

// default parameter as a object

// function solve(value = "Rahul") {
//   console.log("Hello jii", value);
// }

// solve(undefined);

// function as default parameter

function getAge() {
  return 190;
}

function utility(name = "Love", age = getAge()) {
  console.log(name, " ", age);
}
utility();
