let src = {
  name: "Piyush",
  age: 21,
  wt: 90,
  ht: 186,
};

// console.log(obj);

// obj.color = "Red";

// console.log(obj);

// cloning using spread

// let dest = { ...src };

// src.age = 90;

// console.log(src);

// console.log(dest);

// cloning using assign

// let dest = Object.assign({}, src);

// console.log(dest);
// console.log(src);

//  cloning using iteration

let dest = {};

for (key in src) {
  let newKey = key;
  let newVal = src[key];

  dest[newKey] = newVal;
}

console.log(src);
console.log(dest);
