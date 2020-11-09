import React, { useEffect, useState } from "react";
import Movie from "./Movie/Movie";
import styles from "./Movies.module.css";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        const movies = data.slice(0, 12);
        // console.log(movies);
        setMovies(movies);
      });
  }, []);

  const allMovies = movies.map((movie) => {
    return <Movie movie={movie} key={movie.id} />;
  });


  return (
    <>
      <section>
        <div className="container">
          <div className={styles.introHeader}>
            <h1>Popular Shows</h1>
          </div>
          <div className="row">{allMovies}</div>
        </div>
      </section>
    </>
  );
}

export default Movies;
