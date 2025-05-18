// function callTwice(func) {
//   func();
//   func();
// }

// function tenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// // callTwice(rollDie);

// tenTimes(rollDie); // passing a function as an argument but

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return () => {
//       console.log("Congrats");
//       console.log("You Win a Million Dollars");
//     };
//   } else {
//     return () => {
//       console.log("Ohh!!!");
//       alert("Stfu Kid");
//     };
//   }
// }

// let x = makeMysteryFunc();

// x();

// a function that generat es a function based upon some input

function getAge(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = getAge(100, 200);

console.log(isChild(22));
