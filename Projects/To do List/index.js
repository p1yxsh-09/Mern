let input = prompt("What You Want To Do ");

const todos = ["Collect Chicken Eggs", "Cat pot Clean"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i} : ${todos[i]}`);
    }
  }
  if (input === "new") {
    const newToDo = prompt("What is the new to do");
    todos.push(newToDo);
    console.log(`${newToDo} added to the listy`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Kya Delete Krna"));

    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);

      console.log(`ok, Deleted ${deleted[0]}`);
    }

    console.log(index);
  } else {
    console.log("Unknown Index");
  }
  input = prompt("What You Want To Do ");
}

console.log("Okay Bye Bye");
