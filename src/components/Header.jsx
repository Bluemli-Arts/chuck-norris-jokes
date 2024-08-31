/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Header({fetchJokeByCat}) {
  let [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((data) => setCats(data));
  }, []);

  return (
    <header>
      <h1>Chuck Norris Joke Generator</h1>
      <nav>
        <ul>
          {cats.map((cat) => (
            <li
              className="catNav"
              key={cat}
              onClick={() => fetchJokeByCat(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
