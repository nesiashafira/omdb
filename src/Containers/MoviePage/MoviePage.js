import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "./MoviePage.css";
import Back from "../../Assets/back.png";
import MovieDetail from "../../Components/MoviePage/MovieDetail/MovieDetail";

const MoviePage = () => {
  const x = useParams();

  const id = x.imdbID;
  const [detail, setDetail] = useState();

  const getMovieDetails = async () => {
    const data = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=c83422fb`
    );
    setDetail(data.data);
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <NavLink className="back-btn" to={`/`} data-cy="back-btn">
        <img className="back-icon" src={Back} alt="back-icon"></img>
        <p className="back-txt">Back</p>
      </NavLink>
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%" }}>
          <img
            className="detail-poster"
            src={detail && detail.Poster}
            alt="poster"
            data-cy="detail-poster"
          ></img>
        </div>
        <div style={{ width: "60%" }}>
          <MovieDetail
            title={detail && detail.Title}
            year={detail && detail.Year}
            runtime={detail && detail.Runtime}
            rating={detail && detail.imdbRating}
            genre={detail && detail.Genre}
            plot={detail && detail.Plot}
            director={detail && detail.Director}
            actors={detail && detail.Actors}
            writer={detail && detail.Writer}
            country={detail && detail.Country}
            awards={detail && detail.Awards}
            production={detail && detail.Production}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
