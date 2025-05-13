// async function getData() {
//   setTimeout(function () {
//     console.log("I am Inside set timeout block");
//   }, 3000);
// }

// let output = getData();

// as we get to know that async funnction gives always a promise

// fetch  api

// async function getState() {
//   // get request marni hai -> async
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   // parse json -> async
//   let data = await response.json();
//   console.log(data);
// }

// let respo = getState();
// now here a scenario is created
// prepare url / end point -> sync
// fetch data -> network call -> comes in async
// process data  -> print data -> sync

// now what will happen here is
/*
first line 19 will be executed ,after that 20th line will take some time to execute so till that line 21 will starts and get executed 
but the point to note is that the result for the data will be undefined because line 20 hasnt executed yet 



so if we want that line 20 executes first and it makes sure that data is fetched before hopping on to the line 21 due to its asynchronous behaviour we will use the await 

 */

// json - javascript object notation

// this is just a normal simulation to run the code after getting data using await

// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

// now we will actually gonna fetch the data

async function getData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json();
  return data;
}

// console.log("Data lana padega");

// console.log("Wait data Aayega");

// let data = await getData();

// console.log(data); // here promise didnt fullfiled

// console.log("Data Aagaya");

// console.log("Data Use karo");

// if i want the data first then we have two options

// 1.) call baack function then se

// data.then((v) => {
//   console.log(data); // here promise didnt fullfiled

//   console.log("Data Aagaya");

//   console.log("Data Use karo");
// });

// this is one waay

// it is the best practice that we can do is use the await keyword with the async fucntion for that we put the await keyword but for that we have to wrap that await in a fucntion and that fucntion is also be an async await function

async function main() {
  console.log("Data lana padega");

  console.log("Wait data Aayega");

  let data = await getData();
  console.log(data); // here promise didnt fullfiled

  console.log("Data Aagaya");

  console.log("Data Use karo");
}

main();
