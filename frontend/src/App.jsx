import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Exhibits from './components/Exhibits/Exhibits'

export const BASE_URL = 'http://localhost:8000'

function App() {


  return (
    <>
    <Navbar />
    <Header />
      <h1>Bridgehouse Project</h1>
    <Exhibits />
    </>
  )
}

export default App
