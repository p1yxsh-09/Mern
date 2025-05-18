// Definition of the Reduce Function
// The reduce function takes an array and a callback function as arguments.
// It applies the callback function to each element in the array, accumulating a single result.
// The callback function takes four arguments:
// - accumulator: the accumulated value from the previous iteration
// - currentValue: the current element being processed
// The reduce function returns the final accumulated value after processing all elements in the array

const Movies = [
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.6,
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
  },
  {
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    rating: 9.2,
  },
];

const highRatedMovies = Movies.reduce((accMov, currMov) => {
  if (currMov.rating > 9.0) {
    return currMov;
  }
  return accMov;
});

console.log("Movies with rating greater than 9.0:", highRatedMovies);
