// let fpromise = new Promise((resolve, reject) => {
//   function sayMyName() {
//     console.log("Piyush Awasthi");
//   }

//   setTimeout(sayMyName, 15000);
// }); // it is pending state beacause we havent put the state to be fullfiled rn we are doing it manually becuase we are just learing

// now we will put the state to resolve and by that the browser get to know that promise has been fullfiled

let fpromise = new Promise((resolve, reject) => {
  function sayMyName() {
    console.log("Piyush Awasthi");
  }

  setTimeout(sayMyName, 0);
  resolve(1);
});

//  and in background we can run this async task by either concurrently or parallely

// Promise with then and catch , we can use mutliple then and catch blocks

// let pro1 = new Promise((resolve, reject) => {
//   let success = 1;

//   if (success) {
//     resolve("Promise Fullfiled");
//   } else {
//     reject("Promise Rejected");
//   }
// });

// pro1
//   .then((message) => {
//     console.log("Message is :" + message);
//     return "Second Message Fullfiled";
//   })
//   .then((message) => {
//     console.log("Second Message : " + message); //this multiple then are known as promise chaning
//     return "Third Message Fullfiled";
//   })
//   .then((message) => {
//     console.log("Third Message : " + message);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally((message) => {
//     console.log("Mai to final hoon chalunga hi pakka");
//   });

// pro1
//   .then((mess) => {
//     console.log("Then ka Message is : " + mess);
//   })
//   .catch((err) => {
//     console.log("Error is : " + err);
//   });

//  handling multiple promises
// let pro1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "First");
// });

// let pro2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "second");
// });

// let pro3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 3000, "third");
// });

// // promise.all ek new promise hai joh resolve tab hoga jab iske sare elements andar ke resolve honge , agar 1 bhi reject hua then it wont work

// Promise.all(
//   [
//     pro1,
//     pro2,
//     pro3,
//   ] /* also hee order matters agar promise 3 phele bhejta toh vo phele print hota */
// )
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((Error) => {
//     console.error("Error :" + Error);
//   });
