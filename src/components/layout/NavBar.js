import React from 'react'
import image from '../../assets/topSlice.png'
import '../../styles/NavBar.css'

export default function NavBar() {
  return (
    <>
    <div className='header'>
      <div className='graphicContainer'>
        <img className='headerGraphic' src={image} alt=''/>
      </div>
      <div className='headerQLs'>
        Header Links
      </div>
    </div>
    </>
  )
}
