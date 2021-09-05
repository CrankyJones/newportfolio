import React from 'react'
import Background from './Background'
import Education from './Education'
import Hobbies from './Hobbies'
import Projects from './Projects'
import Skills from './Skills'

export default function Router( {currentPage, ...props} ) {
  const Page = [
    Skills,Education,Hobbies,Projects,Background
  ][currentPage]
  return (
    <Page
      {...props}
    />
  )
}
