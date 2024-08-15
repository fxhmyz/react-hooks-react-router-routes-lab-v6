// src/pages/Directors.js
import React from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const directors = [
    { name: "Director 1", movies: ["Movie 1", "Movie 2"] },
    { name: "Director 2", movies: ["Movie 3"] },
  ];

  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;
