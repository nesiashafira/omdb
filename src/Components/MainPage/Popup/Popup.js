import React from "react";
import "./Popup.css";
import Close from "../../../Assets/close.png";

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
          data-cy="popup-close"
        ></img>
        <img
          className="popup-poster"
          src={poster}
          alt="poster"
          data-cy="popup-poster"
        ></img>
      </div>
    </div>
  );
};

export default Popup;
