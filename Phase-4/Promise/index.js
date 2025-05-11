// let fpromise = new Promise((resolve, reject) => {
//   function sayMyName() {
//     console.log("Piyush Awasthi");
//   }

//   setTimeout(sayMyName, 15000);
// }); // it is pending state beacause we havent put the state to be fullfiled rn we are doing it manually becuase we are just learing

// now we will put the state to resolve and by that the browser get to know that promise has been fullfiled

// let fpromise = new Promise((resolve, reject) => {
//   function sayMyName() {
//     console.log("Piyush Awasthi");
//   }

//   setTimeout(sayMyName, 15000);
//   resolve(1);
// });

//  and in background we can run this async task by either concurrently or parallely

// Promise with then and catch , we can use mutliple then and catch blocks

let pro1 = new Promise((resolve, reject) => {
  let success = 1;

  if (success) {
    resolve("Promise Fullfiled");
  } else {
    reject("Promise Rejected");
  }
});

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
//   });

// pro1
//   .then((mess) => {
//     console.log("Then ka Message is : " + mess);
//   })
//   .catch((err) => {
//     console.log("Error is : " + err);
//   });
