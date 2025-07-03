import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Wrapper = ({children}:any) => {
  return (
    <>
    <Navbar/>
    <div>
        {children}
    </div>
    <Footer/>
    </>
  )
}

export default Wrapper
