import React from "react";
import { NavLink } from "react-router-dom";
import "./MovieCard.css";
import Popup from "../../Assets/popupIcon.png";

const MovieCard = (props) => {
  const { poster, title, year, imdbID, popupHandler } = props;

  return (
    <div className="card-container">
      <img
        className="popup-icon"
        src={Popup}
        alt="popup-icon"
        onClick={popupHandler}
      ></img>
      <img className="movie-poster" src={poster} alt="poster"></img>
      <div className="movie-detail">
        <p className="movie-title">{title} </p>
        <p className="movie-year">{year} </p>
        <NavLink className="detail-btn" to={`/${imdbID}`}>
          <p>Details</p>
        </NavLink>
      </div>
    </div>
  );
};

export default MovieCard;
