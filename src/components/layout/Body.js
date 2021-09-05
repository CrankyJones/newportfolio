import React from 'react'
import image from '../../assets/middleSlice.png'
import '../../styles/Body.css'
import Router from '../Router';

export default function Body( {currentPage} ) {
  return (
    <>
    <div className='bodyContainer'>
      <img className='bodyGraphic' src={image} alt=''/>
      <div className='textContent'>
        <Router
        currentPage={currentPage}
        />  
      </div>
    </div>
    </>
  )
}
