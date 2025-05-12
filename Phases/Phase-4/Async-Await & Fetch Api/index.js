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


