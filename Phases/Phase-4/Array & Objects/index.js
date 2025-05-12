let obj = {
  name: "Love",
  age: 25,
  weight: 85,
  height: "6ft",

  // object me function

  greet: () => {
    console.log("Hello Jii kaise ho saare");
  },
};

// console.log(obj);
// obj.greet();

let obj2 = obj;
// console.log(obj2);

// creation of an array

let arr = [1, 2, 3, 4, 5, 6];

// console.log(arr);

// array constructtor

let brr = new Array(1, 2, "hello", false);

// console.log(brr);

// map on array

let arrr = [10, 20, 30];

let ans = arrr.map((number) => {
  return number * number;
});

// console.log(ans);

// let ind = arrr.map((num, index) => {
//   console.log(num);
//   console.log(index);
// });

// console.log(ind);

// using filte on array

let pip = [10, 20, 30, 14, 40, 57, 23];

let asnwer = pip.filter((number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

// console.log(asnwer);

let pipo = [10, 20, 30, 40];

let ans21 = pipo.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// console.log(ans21);

let arrru = [9, 1, 7, 4, 2, 8];
arrru.sort();
arrru.reverse();
// console.log(arrru);

// console.log(arrru.indexOf(8));

// for each looop

let arr100 = [10, 20, 30];

// arr100.forEach((num, index) => {
//   console.log("Number :", num, "Index :", index);
// });

// for - in loop

// for (let key in obj) {
//   console.log(key, " ", obj[key]);
// }

// for off loop jisme iterable objects hote hain --> array ,strings ke upar iterate kr skte hai

let arr121 = [10, 20, 30, 40];

// for (let val of arr121) {
//   console.log(val);
// }

let arr120 = [10, 20, 30, 40, 50, 60];

function getsum(arr) {
  // one way to solve
  // let length = arr.length;

  // let sum = 0;
  // for (let i = 0; i < length; i++) {
  //   sum = sum + arr[i];
  // }
  // return sum;

  // another way to solve

  let sum = 0;

  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

let answer1 = getsum(arr120);
// console.log(answer1)

// using function with variable

// function greetMe(greet, fuillName) {
//   console.log("Hello ", fuillName);
//   greet();
// }

// let greet = () => {
//   console.log("Greeetings bc");
// };

// greetMe(greet, "Piyush");
// greet();

// function solve(number) {
//   return function (number) {
//     return number * number;
//   };
// }

// let anw = solve();

// let finalAns = anw(10);

// console.log(finalAns);

const arr1 = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
  function (a, b) {
    return a * b;
  },
];

let first = arr1[0];
let secFrist = arr1[1];
let thirdFrist = arr1[2];

let ans123 = thirdFrist(1, 9);
console.log(ans123);
