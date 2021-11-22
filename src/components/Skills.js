import React from "react";
import "../../src/styles/BodyContent.css";

export default function Skills() {
  return (
    <div>
      <div className="container">
        <div className="contentHeading">
          <h2>Languages:</h2>
        </div>
        <ul className='contentBodyI'>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <div className="contentHeading">
          <h2>Frameworks:</h2>
        </div>
        <ul className='contentBodyI'>
          <li>Rails</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          <li>Next.js</li>
        </ul>
        <div className="contentHeading">
          <h2>Libraries:</h2>
        </div>
        <ul className='contentBodyI'>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}
