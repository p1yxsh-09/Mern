const foroom = document.querySelector("#katta ");
const input = document.querySelector("#name");
const list = document.querySelector("#cats");

foroom.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted");

  const val = input.value;
  const newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(val));
  list.appendChild(newLi);

  if (val === "") {
    alert("Please enter a name");
  }
  input.value = "";
});

// const form = document.querySelector("form");

// const ul = document.querySelector("#list");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const prod = input.value;
//   const qty = input.value;

//   const newLI = document.createElement("li");

//   newLI.textContent = `${qty}${prod}`;

//   form.appendChild(newLI);
// });
