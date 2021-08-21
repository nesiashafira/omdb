import React from "react";
import "./Popup.css";
import Close from "../../Assets/close.png";

const Popup = (props) => {
  const { poster, close } = props;

  return (
    <div className="popup-background">
      <div className="popup-items">
        <img
          className="close-icon"
          src={Close}
          alt="close-icon"
          onClick={close}
        ></img>
        <img className="popup-poster" src={poster} alt="poster"></img>
      </div>
    </div>
  );
};

export default Popup;
