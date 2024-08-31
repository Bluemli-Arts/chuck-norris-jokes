import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Joke from "./components/Joke";

function App() {
  let [joke, setJoke] = useState({});

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data));

  }, []);

  function fetchJokeByCat(catString) {
    fetch("https://api.chucknorris.io/jokes/random?category=" + catString)
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }

  return (
    <div className="container">
      <Header fetchJokeByCat={fetchJokeByCat}/>
      <div className="joke-container">

      <Joke joke={joke} />
      </div>
    </div>
  );
}

export default App;
