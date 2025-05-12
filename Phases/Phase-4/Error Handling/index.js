// syntax error ek compile-time error hot hai

// refrence error ek runtime error hota hai

try {
  console.log("Try bloclk starts here");
  console.log(x);
  console.log("Try bloclk end here");
} catch (err) {
  // define krta hai , error ke sath krna kya hai
  // retry logic
  // fallback mechanism
  // logging
  // custom error
  throw new Error("Print krle phele bsdk");
} finally {
  console.log("Finnaly");
}
