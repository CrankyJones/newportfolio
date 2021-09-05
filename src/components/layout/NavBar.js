import React from 'react'
import image from '../../assets/topSlice.png'

import '../../styles/NavBar.css'

export default function NavBar({ setCurrentPage }) {
  
  const handleClick = ( PageToDisplay ) => {
    setCurrentPage(PageToDisplay);
  }

  return (
    <>
    <div className='header'>
      <div className='graphicContainer'>
        <img className='headerGraphic' src={image} alt=''/>
      </div>
      <div className='headerQLs'>
        <div className='QL'>
          <h2 onClick={() => handleClick(0)}>Skills</h2>
        </div>
        <div className='QL'>
          <h2 onClick={() => handleClick(1)}>Education</h2>
        </div>
        <div className='QL'>
          <h2 onClick={() => handleClick(2)}>Hobbies</h2>
        </div>
        <div className='QL'>
          <h2 onClick={() => handleClick(3)}>Projects</h2>
        </div>
        <div className='QL'>
          <h2 onClick={() => handleClick(4)}>Background</h2>
        </div>
      </div>
    </div>
    </>
  )
}
