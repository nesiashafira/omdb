import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MainPage.css";
import Logo from "../../Assets/logo.png";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Popup from "../../Components/Popup/Popup";

const MainPage = () => {
  const [datas, setDatas] = useState([]);
  const [popupShow, setPopupShow] = useState(false);
  const [popupImg, setpopupImg] = useState();

  const wording = {
    title: "Welcome to OMDb",
    desc: [
      "Search your favorite movies here.",
      "Check the detail of your favorite movies or find the perfect next movies to watch!",
    ],
  };

  const getTitle = async (string, page) => {
    const { data } = await axios.get(
      `http://www.omdbapi.com?apikey=c83422fb&s=${string}&page=${page}`
    );
    // await setDatas((prevState) => {
    //   return prevState.length > 0 ? [...prevState, data] : [data];
    // });

    setDatas(data.Search);
  };

  const onChangeHandler = (event) => {
    const value = event.target.value;
    getTitle(value, 1);
    console.log(value);
  };

  const posterPopupHandler = (img) => {
    setPopupShow(true);
    setpopupImg(img);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        getTitle("batman", 2);
      }
    };
    // eslint-disable-next-line
  }, []);

  console.log(datas);

  console.log(popupShow);

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
        <SearchBar onChanged={(event) => onChangeHandler(event)}></SearchBar>
      </div>

      <div className="movie-list">
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
