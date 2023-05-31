import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  const baseURl = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row___posters">
        {movies?.map(
          (movie) =>

            ((isLargeRow && movie.poster_path && movie.backdrop_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div className="row___movie-thumbnail-card" key={movie.id}>
                <img
                  className={`row___poster`}
                  src={`${baseURl}${movie.backdrop_path}`}
                  alt={movie.name}
                  key={movie.id}
                />
                <div className="row____movie-thumbnail-info">
                  <div className="row___movie-btns"></div>
                  <div className="row___movie-stats">
                    {movie.vote_average}
                    {movie.popularity}
                    {movie.adult}
                  </div>
                  <div className="row___movie-genres">{movie.genres}</div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Row;
