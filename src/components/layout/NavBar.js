import React from 'react'
import educationImage from '../../assets/topEducationSlice.png'
import backgroundImage from '../../assets/topBackgroundSlice.png'

import '../../styles/NavBar.css'

export default function NavBar({ setCurrentPage, currentPage }) {
  
  const handleClick = ( PageToDisplay ) => {
    setCurrentPage(PageToDisplay);
  }

  return (
    <>
    <div className='header'>
      <div className='graphicContainer'>
      {currentPage === 0 &&
          <img className= 'headerGraphic' src={backgroundImage} alt=''/>
        }
        {currentPage === 1 &&
          <img className= 'headerGraphic' src={educationImage} alt=''/>
        }
        {currentPage === 2 &&
          <img className= 'headerGraphic' src={backgroundImage} alt=''/>
        }
        {currentPage === 3 &&
          <img className= 'headerGraphic' src={backgroundImage} alt=''/>
        }
        {currentPage === 4 &&
          <img className= 'headerGraphic' src={backgroundImage} alt=''/>
        }
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
