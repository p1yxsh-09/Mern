// function repeat(str, num) {
//   let result = "";
//   for (let i = 0; i < num; i++) {
//     result += str;
//   }
//   console.log(result);
// }

// repeat("hi", 3);

// function capitalize(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// let x = capitalize("eggplant");

// console.log(x);

// DEFINE YOUR FUNCTION BELOW:

function returnDay(day) {
  let totalDays = [
    null,
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (totalDays < 1 || totalDays > 7) {
    return null;
  } else {
    return totalDays[day];
  }
}

let x = returnDay(3);
console.log(x);
