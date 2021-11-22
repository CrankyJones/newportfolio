import React from "react";
import monster from "../assets/monster.png";
import flashChords from "../assets/FlashChordsImg.png";

import "../../src/styles/Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projectsContainer">
        <div className="project">
          <a href="https://github.com/CrankyJones/monster-game">
            <img src={monster} alt="" />
            <div className="projectText">
              A prototype level for an isometric monster destruction puzzle
              game.
            </div>
            <div>Uses React and Recoil</div>
          </a>
        </div>

        <div className="project">
          <a href="https://github.com/CrankyJones/piano_pals">
            <img src={flashChords} alt="" />
            <div className="projectText">
              A flash card website for major and minor piano chords.
            </div>
            <div>Uses Ruby on Rails</div>
          </a>
        </div>
      </div>
    </>
  );
}
