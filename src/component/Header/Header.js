import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className={`row ${styles.header}`}>
          <Link to="/">
          <h1 className={styles.logo}>Bit Show</h1>
          </Link>
           
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control w-100" type="search" placeholder="Search" aria-label="Search"/>
            </form>
   </div>
      </div>
    </header>
  );
}

export default Header;
