// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.max(...numbers));

//  ... is the spread operator
// It allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected
//  what it does is that it spreads the elements of the array into individual arguments

// using the spread operator to combine two arrays

const cats = ["Persian", "Siamese", "Maine Coon"];

const dogs = ["Labrador", "Beagle", "Bulldog"];
const pets = [...cats, ...dogs];
console.log(pets);


//  spread only copied the reference of the array and not the actual array  