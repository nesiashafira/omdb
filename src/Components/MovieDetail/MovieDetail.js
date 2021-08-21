import React from "react";
import "./MovieDetail.css";
import Rate from "../../Assets/rate.png";

const MovieDetail = (props) => {
  const {
    title,
    year,
    rating,
    runtime,
    genre,
    plot,
    director,
    actors,
    writer,
    country,
    awards,
    production,
  } = props;

  return (
    <div className="detail-container">
      <h1>{title} </h1>

      <div className="flex">
        <h3>{year} </h3>
        <div className="circle" />
        <div className="flex">
          <img src={Rate} alt="rating-icon"></img>
          <h3>{rating} </h3>
        </div>
        <div className="circle" />
        <h3>{runtime} </h3>
      </div>

      <h3>{genre} </h3>

      <div style={{ margin: "35px 0", fontSize: "18px" }}>
        <p>{plot} </p>
      </div>

      <div>
        <p>
          <b>Director</b>: {director}
        </p>
        <p>
          <b>Writer</b>: {writer}
        </p>
        <p>
          <b>Actors</b>: {actors}
        </p>
      </div>

      <hr style={{ margin: "25px 0" }}></hr>

      <div>
        <p>
          <b>Country</b>: {country}
        </p>
        <p>
          <b>Awards</b>: {awards}
        </p>
        <p>
          <b>Production</b>: {production}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
