import React from 'react'
import image from '../../assets/middleSlice.png'
import '../../styles/Body.css'

export default function Body() {
  return (
    <div className='bodyContainer'>
      <img className='bodyGraphic' src={image} alt=''/>
    </div>
  )
}
