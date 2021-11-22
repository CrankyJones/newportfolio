import React from "react";
import educationImage from "../../assets/middleEducationSlice.png";
import backgroundImage from "../../assets/middleBackgroundSlice.png";
import "../../styles/Body.css";
import Router from "../Router";

export default function Body({ currentPage }) {
  return (
    <>
      <div className="bodyContainer">
        {currentPage === 0 && (
          <img className="bodyGraphic" src={backgroundImage} alt="" />
        )}
        {currentPage === 1 && (
          <img className="bodyGraphic" src={educationImage} alt="" />
        )}
        {currentPage === 2 && (
          <img className="bodyGraphic" src={backgroundImage} alt="" />
        )}
        {currentPage === 3 && (
          <img className="bodyGraphic" src={backgroundImage} alt="" />
        )}
        {currentPage === 4 && (
          <img className="bodyGraphic" src={backgroundImage} alt="" />
        )}
        <div className="textContent">
          <Router currentPage={currentPage} />
        </div>
      </div>
    </>
  );
}
