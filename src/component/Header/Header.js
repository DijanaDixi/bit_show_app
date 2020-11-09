import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [value, setSearchValue] = useState("");
  const [movies, setAllMovies] = useState([]);
  const [dropdown, setDropdownList] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setAllMovies(data);
      });
  }, [value]);

  const getValue = (value) => {
    setDropdownList(true);
    setSearchValue(value);
  };
  const list = movies.map((item) => {
    return (
      <Link
        className="dropdown-item"
        key={item.show.id}
        to={"/infoPage/" + item.show.id}
      >
        {item.show.name}
      </Link>
    );
  });
  return (
    <header>
      <div className="container">
        <div className={`row ${styles.header}`}>
          <Link to="/" className={styles.decoration}>
            <h1 className={styles.logo}>Bit Show</h1>
          </Link>

          <div className={styles.inputHolder}>
            <input
              type="search"
              placeholder="Search"
              onChange={(e) => getValue(e.target.value)}
            />
            {dropdown ? (
              <div className={`dropdown ${styles.drop}`}>{list}</div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
