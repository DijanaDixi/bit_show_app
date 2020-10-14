import React from "react";
import {Link} from "react-router-dom"
import styles from "./Movie.module.css"

function Movie({ movie }) {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <Link to={"/infoPage/"+movie.id} className={styles.linkInfo}>
      <div className="card mb-3">
        <img src={movie.image.medium} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text text-center">{movie.name}</p>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Movie;
