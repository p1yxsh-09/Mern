// let fpromise = new Promise((resolve, reject) => {
//   function sayMyName() {
//     console.log("piyush");
//   }

//   setTimeout(sayMyName, 15000);

//   reject("Server error");
//   resolve(1);
// });

let promise1 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise FullFiled");
  } else {
    reject("Error hai bsdk");
  }
});

promise1.then((message) => {
  console.log("Then ka message is :" + message);
}).catch((error) =>{
  console.log("Error ");
  
})
