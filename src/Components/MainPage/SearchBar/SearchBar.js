import React from "react";
import "./SearchBar.css";
import Search from "../../../Assets/search.png";

const SearchBar = (props) => {
  return (
    <div className="search-container">
      <input
        onChange={props.onChanged}
        onKeyUp={props.onKeyUp}
        placeholder="Search Titles"
        data-cy="search-input"
      ></input>
      <img
        className="search-icon"
        src={Search}
        alt="search-icon"
        data-cy="search-btn"
        onClick={props.onClicked}
      ></img>
    </div>
  );
};

export default SearchBar;
