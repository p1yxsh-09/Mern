document.querySelector("button").addEventListener("click", function (e) {
  // alert("Button clicked!");
  console.log(e);
});

const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  console.log(e.key);
  console.log(e.code);
});
// input.
// addEventListener("keyup", (e) => {
//   console.log("Key up");
// });

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("Up arrow key pressed");
      break;
    case "ArrowDown":
      console.log("Down arrow key pressed");
      break;
    case "ArrowLeft":
      console.log("Left arrow key pressed");
      break;
    case "ArrowRight":
      console.log("Right arrow key pressed");
      break;
    default:
      console.log("Other key pressed");
      break;
  }
});
