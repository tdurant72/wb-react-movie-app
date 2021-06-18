import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import Grid from "./Grid";
import Spinner from "./Spinner";
//hook
import { useMovieFetch } from "../hooks/useMovieFetch";
//images
import NoImage from "../images/no_image.jpg";
const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  console.log(movie);
  return (
    <>
      <div>Movie</div>
    </>
  );
};
export default Movie;
