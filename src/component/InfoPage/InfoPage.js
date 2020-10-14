import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styles from "./InfoPage.module.css";

function InfoPage(props) {
  const id = props.match.params.id;
  const [movie, setMovie] = useState([]);
  const [casts, setCasts] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [summary, setSummary] = useState("");

  const summaryWithoutTag = summary.toString().replace(/(<([^>]+)>)/gi, "");

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=seasons`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setMovie(data);
        setCasts(data._embedded.cast);
        setSeasons(data._embedded.seasons);
        setSummary(data.summary);
      });
  }, [id]);

  return (
    <div className="container">
      <h1 className={styles.title}>{movie.name}</h1>
      <div className="row">
        <div className="col-6">
          <img
            src={movie?.image?.medium || "- -"}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6">
          <h1>Season({seasons.length})</h1>
          <ul>
            {seasons.map((season) => {
              return (
                <li
                  key={season.id}
                >{`${season.premiereDate} - ${season.endDate}`}</li>
              );
            })}
          </ul>
          <h2>Cast</h2>
          <ul>
            {casts.map((c) => {
              return <li key={c.character.id}>{c?.person?.name || "- -"}</li>;
            })}
          </ul>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>Show Details</h1>
            <p>{summaryWithoutTag}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(InfoPage);
