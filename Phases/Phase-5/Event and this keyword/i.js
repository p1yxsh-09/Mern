const randColor = () => {
  let r = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll("button");

// for (let btn of buttons) {
//   btn.addEventListener("click", () => {
//     btn.style.backgroundColor = randColor();
//   });
// }

const h1s = document.querySelectorAll("h1");

// for (let h1 of h1s) {
//   h1.addEventListener("click", () => {
//     h1.style.backgroundColor = randColor();
//   });
// }

//  so now we have to declare a fuynbction for both of thsee for that what we can do is the use of this keyword for the refrrence.

for (let btn of buttons) {
  btn.addEventListener("click", colorize);
}

for (let h1 of h1s) {
  h1.addEventListener("click", colorize);
}
function colorize() {
  this.style.backgroundColor = randColor();
  this.style.color = randColor();
}
