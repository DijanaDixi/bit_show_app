import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ filtered,dropdown,searchFilter}) {
  console.log(filtered)

  const list = filtered.map((item) => {
    return (
      <a className="dropdown-item" href="/" key={item.id}>
        {item.name}
      </a>
    );
  });
  return (
    <header>
      <div className="container">
        <div className={`row ${styles.header}`}>
          <Link to="/">
            <h1 className={styles.logo}>Bit Show</h1>
          </Link>

          <div className={styles.inputHolder}>
            <input type="search" placeholder="Search" onChange={(e)=>searchFilter(e.target.value)} />
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
