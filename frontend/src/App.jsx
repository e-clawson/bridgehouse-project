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

export const BASE_URL = 'http://localhost:8000'

function App() {
  const [userAuth, setUserAuth] = useState(null)
  const [isAuthReady, setIsAuthReady] = useState(false)

  useEffect (() => {
    let unsub = auth.onAuthStateChanged((user) => {
      console.log("authentication", user.uid)
      setUserAuth(user)
      setIsAuthReady(true)
      unsub()
    })
  }, [])

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/bridgelifts" element={<BridgeLifts/>} />
      <Route path="/exhibits" element={<Exhibits/>} />
      {/* <Route path="/suport" href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E145588&id=139"/> */}
      <Route path="/venue-rentals" element={<Rentals/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App
  // <Navbar />
  //   <Header />
  //   <SignUp />
  //   <SignIn />
  //     <h1>Bridgehouse Project</h1>
  //   <Exhibits />

   {/* { isAuthReady && <BrowserRouter>
      <Navbar userAuth={userAuth} setUserAuth={setUserAuth}/>
      <div className="routes-container"> 
        <Routes>
          <Route path="/" element={userAuth? <Exhibits />:<Navigate replace={true} to="/login" />} />

        </Routes>

      </div>
    </BrowserRouter>} */}