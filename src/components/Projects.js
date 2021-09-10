import React from 'react'
import monster from '../assets/monster.png'


import '../../src/styles/Projects.css'

export default function Projects() {
  return (
    <>
    <div className="container">
        <a href='https://github.com/CrankyJones/monster-game'>
      <div className="project">
        <img src={monster} />
          <div className="projectText">
            A prototype level for an isometric monster destruction puzzle game.
          </div>
      </div>
        </a>
    </div>
    </>
  )
}
