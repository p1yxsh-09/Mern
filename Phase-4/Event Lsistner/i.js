// function changeText(event) {
//   console.log(event);

//   let fpara = document.getElementById("peep");

//   fpara.textContent = "Piyush";
// }

// let fpara = document.getElementById("peep");

// fpara.addEventListener("click", changeText);

// // fpara.removeEventListener("click", changeText);

// let anc = document.querySelector("#fanc");
// function e(event) {
//   event.preventDefault();
//   anc.textContent = "Click Done Bhai";
// }

// anc.addEventListener("click", e);
// let paras = document.querySelectorAll("p");

// function na(event) {
//   alert("You have printed the :" + event.target.textContent);
// }
// for (let i = 0; i < paras.length; i++) {
//   let para = paras[i];
//   para.addEventListener("click", na);
// }

let myDiv = document.querySelector("div");

function nq(event) {
  alert("You have clicked para :" + event.target.textContent);
}

myDiv.addEventListener("click", nq);
