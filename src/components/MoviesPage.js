import React from "react";
// import the custom `useRouteMatch` hook from React Router
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
// import the MovieShow component
import Movieshow from "./Movieshow";

function MoviesPage({ movies }) {
  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
}

export default MoviesPage;