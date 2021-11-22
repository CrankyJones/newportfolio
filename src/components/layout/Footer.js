import React from "react";
import "../../styles/Footer.css";
import educationImage from "../../assets/footerEducationSlice.png";
import backgroundImage from "../../assets/footerBackgroundSlice.png";
import twitchLogo from "../../assets/TwitchGlitchBlackOps.png";
import instaLogo from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import github from "../../assets/github.png";

export default function Footer({ currentPage }) {
  return (
    <div className="footer">
      <div className="graphicContainer">
        {currentPage === 0 && (
          <img className="footerGraphic" src={backgroundImage} alt="" />
        )}
        {currentPage === 1 && (
          <img className="footerGraphic" src={educationImage} alt="" />
        )}
        {currentPage === 2 && (
          <img className="footerGraphic" src={backgroundImage} alt="" />
        )}
        {currentPage === 3 && (
          <img className="footerGraphic" src={backgroundImage} alt="" />
        )}
        {currentPage === 4 && (
          <img className="footerGraphic" src={backgroundImage} alt="" />
        )}
      </div>
      <div className="footerTextBlock">
        <div className="icons">
          {/* Throw in some Links to socials and site and others */}
          <a href="https://www.twitch.tv/crankyjonesesq">
            <img className="mediaIcon" src={twitchLogo} alt="" />
          </a>
          <a href="https://www.instagram.com/crankyjones">
            <img className="mediaIcon" src={instaLogo} alt="" />
          </a>
          <a href="https://www.twitter.com/geofwecan">
            <img className="mediaIcon" src={twitter} alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCl95LSWJ9XT7qsChZgcCy9g">
            <img className="mediaIcon" src={youtube} alt="" />
          </a>
          <a href="https://github.com/CrankyJones/">
            <img className="mediaIcon" src={github} alt="" />
          </a>
        </div>
        <div className="textLinks">
          <a className="textLink" href="https://crankyjones.creator-spring.com">
            Some Art/Merch
          </a>
          <a className="textLink" href="https://www.crankyjones.com">
            Web Site
          </a>
        </div>
      </div>
    </div>
  );
}
