import React from 'react'
import '../../styles/Footer.css'
import image from '../../assets/footerSlice2.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='graphicContainer'>
        <img className= 'footerGraphic' src={image}/>
      </div>
      <div className='footerTextBlock'>
      Footer Territory!
      </div>
    </div>
  )
}
