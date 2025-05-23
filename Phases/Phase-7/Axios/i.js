// const app = axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     console.log("Response data:", response);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// console.log(app);

// The above code fetches data from a public API and logs the response or error to the console.
// The code uses the Axios library to make an HTTP GET request to the specified URL.

// const loadStrar = async () => {
//   try {
//     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
//     const data = res.data;

//     console.log(data);

//     const res2 = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts`
//     );

//     const data2 = res2.data;
//     console.log(data2);
//   } catch (error) {
//     console.error("Pagal hai kya");
//   }
// };

// loadStrar();
// loadStrar();
// loadStrar();

const button = document.querySelector("button");
const ul = document.querySelector("ul");

const addNewJoke = async () => {
  const joke = await getaddJoke();
  const newLi = document.createElement("li");
  ul.append(newLi);
  newLi.append(joke);
};

const getaddJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return res.data.joke;
};

button.addEventListener("click", addNewJoke);
