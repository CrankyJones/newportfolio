import React, { useState } from 'react'
import Footer from './Footer.js'
import NavBar from './NavBar.js'
import Body from './Body.js'

export default function Layout() {
  const[currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <NavBar 
        setCurrentPage={setCurrentPage}        
      />
      <Body
        currentPage={currentPage}
      />
      <Footer/>
    </>
  )
}