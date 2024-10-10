import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Exhibits from './components/Exhibits/Exhibits'
import SignUp from './components/User/SignUp'
import SignIn from './components/User/SignIn'
import {signOut} from "firebase/auth"
import {auth} from "./config"
import About from './components/Pages/About'
import Events from './components/Pages/Events'
import Home from './components/Pages/Home'
import BridgeLifts from './components/Pages/BridgeLifts'
import Rentals from './components/Pages/Rentals'
import Contact from './components/Pages/Contact'
import Footer from './components/Footer/Footer'

export const BASE_URL = 'http://localhost:8000'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isAuthReady, setIsAuthReady] = useState(false)

  useEffect (() => {
    let unsub = auth.onAuthStateChanged((user) => {
      console.log("authentication", user)
      setCurrentUser(user)
      setIsAuthReady(true)
      unsub()
      console.log(currentUser)
    })
  }, [])

  return (
    <>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/bridgelifts" element={<BridgeLifts/>} />
      <Route path="/exhibits" element={<Exhibits/>} currentUser={currentUser}/>
      <Route path="/venue-rentals" element={<Rentals/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<SignIn setCurrentUser={setCurrentUser}/>} />
    </Routes>
    <Footer currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </>
  )
}

export default App