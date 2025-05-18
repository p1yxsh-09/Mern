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

// // 1. Filter movies released after 2010
// const moviesAfter2010 = Movies.filter((movie) => movie.year > 2010);
// console.log("Movies released after 2010:", moviesAfter2010);
// // 2. Filter movies with a rating greater than 8.5
// const highRatedMovies = Movies.filter((movie) => movie.rating > 8.5);
// console.log("Movies with rating greater than 8.5:", highRatedMovies);
// // 3. Filter movies of the genre "Sci-Fi"
// const sciFiMovies = Movies.filter((movie) => movie.genre === "Sci-Fi");
// console.log("Sci-Fi Movies:", sciFiMovies);
// // 4. Filter movies with a title that contains the word "The"
// const moviesWithThe = Movies.filter((movie) => movie.title.includes("The"));
// console.log("Movies with 'The' in the title:", moviesWithThe);
// // 5. Filter movies with a rating less than 9.0
// const lowRatedMovies = Movies.filter((movie) => movie.rating < 9.0);
// console.log("Movies with rating less than 9.0:", lowRatedMovies);
// // 6. Filter movies released in the 21st century (2001 and later)
// const movies21stCentury = Movies.filter((movie) => movie.year >= 2001);
// console.log("Movies released in the 21st century:", movies21stCentury);

function validUserNames(usernames) {
  const arr = validUserNames.filter((usernames) => {
    return usernames.length < 10;
  });
  return arr;
}

console.log(arr);



// some n every on movie object
// 1. Check if there is any movie with a rating greater than 9.0
const hasHighRatedMovie = Movies.some((movie) => movie.rating > 9.0);
console.log("Is there any movie with a rating greater than 9.0?", hasHighRatedMovie);
// 2. Check if all movies are of the genre "Sci-Fi"
const allSciFiMovies = Movies.every((movie) => movie.genre === "Sci-Fi");
console.log("Are all movies of the genre 'Sci-Fi'?", allSciFiMovies);
// 3. Check if there is any movie released in the 1990s
const has90sMovie = Movies.some((movie) => movie.year >= 1990 && movie.year < 2000);
console.log("Is there any movie released in the 1990s?", has90sMovie);
// 4. Check if all movies have a rating greater than 8.0
const allHighRatedMovies = Movies.every((movie) => movie.rating > 8.0);
console.log("Do all movies have a rating greater than 8.0?", allHighRatedMovies);