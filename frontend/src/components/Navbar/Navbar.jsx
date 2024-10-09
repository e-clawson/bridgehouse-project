import './navbar.css'
import React from 'react'
import {Link} from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'


export default function Navbar(){

    // const Navigate = useNavigate()

    return (
        <div className="navbar-header">
            <div className="header-items">
                <Link className="active" to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/events">Events</Link>
                <Link to="/bridgelifts">Bridge Lifts</Link>
                <Link to="/exhibits">Exhibits</Link>
                <Link to="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E145588&id=139">Support</Link>
                <Link to="/venue-rentals">Venue Rentals</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

// {userAuth && <Link className="active" to="/">Home</Link>}
// {!userAuth &&  <Link to="/signin">sign in</Link>}
// {!userAuth &&  <Link to="/signup">sign up</Link>}
// {userAuth && <button  onClick={logout}>Log Out</button>}
//   {/* <a href="#about">About</a> */}