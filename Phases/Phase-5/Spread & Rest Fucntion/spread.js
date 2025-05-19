// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.max(...numbers));

//  ... is the spread operator
// It allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected
//  what it does is that it spreads the elements of the array into individual arguments

// using the spread operator to combine two arrays

const cats = ["Persian", "Siamese", "Maine Coon"];

const dogs = ["Labrador", "Beagle", "Bulldog"];
const pets = [...cats, ...dogs];
// console.log(pets);

//  spread only copied the reference of the array and not the actual array

// example of rest operator
// function Medals(gold, silver, ...other) {
//   console.log(gold);
//   console.log(silver);
//   console.log(other);
// }
// Medals(1, 2, 3, 4, 5, 6);

// destructuring the array
// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;
// console.log(first);
// console.log(second);
// console.log(rest);

// destructuring the object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   height: 180,
// };
// const { name, age, ...rest } = person;
// console.log(name);
// console.log(age);
// console.log(rest);


// if a default value is not provided, it will be undefined
// but if a value in object is provided and u set a default value, it will take the value from the object
// u can give the name of the variable in the object and it will take the value from the object

