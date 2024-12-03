import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, useParams, Navigate} from "react-router-dom"

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Exhibits from './components/Exhibits/Exhibits'
import SignIn from './components/User/SignIn'
import {auth} from "./config"
import About from './components/Pages/About'
import Events from './components/Pages/Events'
import Home from './components/Pages/Home'
import BridgeLifts from './components/Pages/BridgeLifts'
import Rentals from './components/Pages/Rentals'
import Contact from './components/Pages/Contact'
import Footer from './components/Footer/Footer'
import ExhibitPages from './components/Exhibits/ExhibitPages'

export const BASE_URL = import.meta.env.VITE_BASE_URL || VITE_BASE_URL

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isAuthReady, setIsAuthReady] = useState(false)
  const [exhibits, setExhibits] = useState([])
  let {exhibitId} = useParams();

  useEffect (() => {
    let unsub = auth.onAuthStateChanged((user) => {
      // console.log("authentication", user)
      setCurrentUser(user)
      setIsAuthReady(true)
      unsub()
    })
  }, [])
  // console.log("currentUser", currentUser)

  useEffect(() => {
    async function test() {
      const response = await fetch(`${BASE_URL}/exhibits`)
      const data = await response.json()
      setExhibits(data)
    }
    test()
  }, [])
  // console.log("initial load of exhibits", exhibits)

  return (
    <>
    <Navbar />
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/bridgelifts" element={<BridgeLifts exhibits={exhibits} />} />
      <Route path="/exhibits" element={<Exhibits currentUser={currentUser} exhibits={exhibits} setExhibits={setExhibits}/>} />
      <Route path="exhibits/:exhibitId" element={<ExhibitPages exhibitId={exhibitId} currentUser={currentUser} exhibits={exhibits} setExhibits={setExhibits}/>}/>
      <Route path="/venue-rentals" element={<Rentals/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<SignIn setCurrentUser={setCurrentUser} />}/>
    </Routes>
    <Footer currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </>
  )
}

export default App