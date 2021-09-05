import React from 'react'
import '../../styles/Footer.css'
import image from '../../assets/footerSlice2.png'

export default function Footer({ showSkills, showEducation, showHobbies, showProjects, showBackground }) {
  return (
    <div className='footer'>
      <div className='graphicContainer'>
        <img className= 'footerGraphic' src={image} alt=''/>
      </div>
      <div className='footerTextBlock'>
  {/* Throw in some Links to socials and site and others */}

        Website
      </div>
    </div>
  )
}
