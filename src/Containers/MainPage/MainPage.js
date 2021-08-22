import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainPage.css";
import Logo from "../../Assets/logo.png";
import SearchBar from "../../Components/MainPage/SearchBar/SearchBar";
import MovieCard from "../../Components/MainPage/MovieCard/MovieCard";
import Popup from "../../Components/MainPage/Popup/Popup";

const MainPage = () => {
  const [datas, setDatas] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [title, setTitle] = useState("");
  const [popupShow, setPopupShow] = useState(false);
  const [popupImg, setpopupImg] = useState();
  const wording = {
    title: "Welcome to OMDb",
    desc: [
      "Search your favorite movies here.",
      "Check the detail of your favorite movies or find the perfect next movies to watch!",
    ],
  };

  const getTitle = async () => {
    const { data } = await axios.get(
      `http://www.omdbapi.com?apikey=c83422fb&s=${title}&page=${pagination}`
    );

    if (data.Search) {
      setDatas([...datas, ...data.Search]);
    }
  };

  const onChangeHandler = (event) => {
    setDatas([]);
    setPagination(1);
    const value = event.target.value;
    setTitle(value);
  };

  const searchOnEnter = (event) => {
    if (event.keyCode === 13) getTitle(title, pagination);
  };

  const searchOnClick = () => {
    getTitle(title, pagination);
  };

  const posterPopupHandler = (img) => {
    setPopupShow(true);
    setpopupImg(img);
  };

  useEffect(() => {
    const container = document.getElementsByClassName("movie-list")[0];

    container.onscroll = () => {
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight
      ) {
        const newPage = pagination + 1;
        getTitle();
        setPagination(newPage);
      }
    };
    // eslint-disable-next-line
  }, [pagination]);

  return (
    <div className="container">
      <div className="logo-container">
        <img className="logo-img" src={Logo} alt="logo"></img>
      </div>
      <h1>{wording.title} </h1>
      {wording.desc.map((desc, index) => (
        <p key={index}>{desc} </p>
      ))}
      <div>
        <SearchBar
          onChanged={(event) => onChangeHandler(event)}
          onKeyUp={(event) => searchOnEnter(event)}
          onClicked={() => searchOnClick()}
        ></SearchBar>
      </div>

      <div className="movie-list" data-cy="movie-list">
        {datas &&
          datas.map((movie, index) => (
            <MovieCard
              key={index}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              imdbID={movie.imdbID}
              popupHandler={() => posterPopupHandler(movie.Poster)}
            />
          ))}
      </div>

      {popupShow && (
        <Popup poster={popupImg} close={() => setPopupShow(false)}></Popup>
      )}
    </div>
  );
};

export default MainPage;
