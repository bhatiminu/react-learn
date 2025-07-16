import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <div>
      React router
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default App
