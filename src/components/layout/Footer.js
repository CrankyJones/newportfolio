import React from 'react'
import '../../styles/Footer.css'
import educationImage from '../../assets/footerEducationSlice.png'
import backgroundImage from '../../assets/footerBackgroundSlice.png'

export default function Footer({ currentPage }) {
  return (
    <div className='footer'>
      <div className='graphicContainer'>
        {currentPage === 0 &&
          <img className= 'footerGraphic' src={backgroundImage} alt=''/>
        }
        {currentPage === 1 &&
          <img className= 'footerGraphic' src={educationImage} alt=''/>
        }
        {currentPage === 2 &&
          <img className= 'footerGraphic' src={backgroundImage} alt=''/>
        }
        {currentPage === 3 &&
          <img className= 'footerGraphic' src={backgroundImage} alt=''/>
        }
        {currentPage === 4 &&
          <img className= 'footerGraphic' src={backgroundImage} alt=''/>
        }
      
      </div>
      <div className='footerTextBlock'>
        <div className='text'>
  {/* Throw in some Links to socials and site and others */}
      twitch
      insta
      youtube
      teespring
        Website
        </div>
      </div>
    </div>
  )
}
