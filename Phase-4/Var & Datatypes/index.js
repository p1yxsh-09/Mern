// var age = 25; // declaring variable globally

// if (true) {
//   console.log(age);
// }

function solve() {
  var age = 25; // now it declared as function scope varaible it can leads to debuggin issue
  // console.log(age);
}
// console.log(age);
solve();

// you can also reclare the varible with var which is not considferd as a good practice (can be reassigned and redefine as well)
// var x = 10;
// var x = 20;

// ----------------------------------------------------------------> Let <--------------------------------------------------------------------------------
{
  let a = 10;
  // as u can see we are accessing the variable outside the blocked scope , thats why its not accesing the variable.
}

// console.log(a);

// now in let u are not allowed to reassigned or redefined but u can manipulate the data

// let a = 100;
// a = "Mayank";
// a = true;
// a = null;

// console.log(a);

// --------------------------------------------------------------->Const<------------------------------------------------------------------------------------

// bhai sidhi si baat const me ek bari declare krdia kisi ka baap change nahi kr skta isse\

const a = 28;

console.log(a);

// a = 20;
// console.log(a); // see nahi hua samjhe
 