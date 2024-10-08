import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Exhibits from './components/Exhibits/Exhibits'
import SignUp from './components/User/SignUp'
import SignIn from './components/User/SignIn'

export const BASE_URL = 'http://localhost:8000'

function App() {


  return (
    <>
    <Navbar />
    <Header />
    <SignUp />
    <SignIn />
      <h1>Bridgehouse Project</h1>
    <Exhibits />
    </>
  )
}

export default App
