// src/pages/Movie.js
import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const movie = {
    id: 1,
    title: "Movie 1",
    time: "120 minutes",
    genres: ["Action", "Thriller"],
  };

  if (parseInt(id) !== movie.id) {
    return (
      <div>
        <NavBar />
        <h1>Movie not found</h1>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre} </span>
      ))}
    </div>
  );
}

export default Movie;
