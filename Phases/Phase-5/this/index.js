const cat = {
  name: "Smoosh",
  breed: "American British Shorthair",
  color: "Brownish",
  meow() {
    console.log("meow meow meow");
    console.log(
      `His Name is ${this.name} and breed is ${this.breed} and color is ${this.color}`
    );
  },
};

// cat.meow();

// learned  one  thing that we have to use this instead of object.name its fine to use object.name if we have this object only but when we have diffrent objects and we have to use the same fucntionality then this keyword plays an important role

const catMeow = cat.meow;

catMeow();
