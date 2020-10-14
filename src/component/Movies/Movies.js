import React, { useEffect, useState } from "react";
import Movie from "./Movie/Movie";
import Header from "../Header/Header";
import styles from "./Movies.module.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [dropdown, setDropdownList] = useState(false);

  useEffect(() => {
    fetch("http://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        const movies = data.slice(0, 12);
        setMovies(movies);
        setFiltered(movies);
      });
  }, []);

  const allMovies = filtered.map((movie) => {
    return <Movie movie={movie} key={movie.id} />;
  });

  const searchFilter = (value) => {
    const filter = movies.filter((item) =>
      item.name.toLowerCase().trim().includes(value.toLowerCase())
    );
    setFiltered(filter);
    setDropdownList(true);
    if (!value.length) {
      setDropdownList(false);
    }
  };
  return (
    <>
      <Header
        filtered={filtered}
        dropdown={dropdown}
        searchFilter={searchFilter}
      />
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
