let secretNumbers = parseInt(prompt("Enter the Maximum Number"));

while (!secretNumbers) {
  secretNumbers = parseInt(prompt("Enter a Valid Number | Type q to exit"));
}

const secretNumber = Math.floor(Math.random() * secretNumbers) + 1;

let guess = prompt("Enter a Number Type q to quit");

let count = 1;
while (parseInt(guess) !== secretNumber) {
  if (guess === "q") break;
  guess = parseInt(guess);
  count++;
  if (guess < secretNumber) {
    guess = prompt("Too Low");
    count++;
  } else if (guess > secretNumber) {
    guess = prompt("Too High");
    count++;
  } else {
    break;
  }
}

console.log(`It took you ${count} guesses`);
