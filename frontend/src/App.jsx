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
import Home from './components/Pages/Home'

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