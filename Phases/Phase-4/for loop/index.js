const subreddits = ["cringe", "player", "books", "chickens"];

// usign for of looop

// here we create a a variable for it items that we want to iterate

const testScores = {
  piyush: 22,
  priynash: 24,
  bhavya: 21,
  harsh: 21,
  pookie: 22,
  rahul: 14,
  vikrant: 22,
  parth: 19,
};

// these key-value pairs are not considered as objects , for that if we want to iterate we use for-in loop

let pop = Object.entries(testScores);

for (let po of pop) {
  console.log(po);
}
