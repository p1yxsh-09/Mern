let numbers = [1, 2, 3, 4, 5];

let square = numbers.map((number) => {
  return number * number;
});
console.log(square); // [1, 4, 9, 16, 25] here squre is a new array not a function
// here we are using map function to create a new array of square of numbers

// write a definition of map function in words
// The map function is a higher-order function that takes an array and a callback function as arguments. It applies the callback function to each element of the array, creating a new array with the results of the callback function. The original array remains unchanged. The map function is commonly used for transforming data in functional programming.
