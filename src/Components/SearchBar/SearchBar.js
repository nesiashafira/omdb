import React from "react";
import "./SearchBar.css";
import Search from "../../Assets/search.png";

const SearchBar = (props) => {
  return (
    <div className="search-container">
      <input onChange={props.onChanged} placeholder="Search Titles"></input>
      <img className="search-icon" src={Search} alt="search-icon"></img>
    </div>
  );
};

export default SearchBar;
