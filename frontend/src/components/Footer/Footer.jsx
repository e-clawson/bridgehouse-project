import react from 'react'
import {Link} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from '../../config'
import {useNavigate} from 'react-router-dom'
import './footer.css'

export default function Footer({currentUser, setCurrentUser}){

    const logout = async ()=> {
        console.log("made it inside logout")
        await signOut(auth)
        console.log("sign out successful")
        setCurrentUser(null)
    }

    return (
        <>
        <div className="footer">
            <h4>Sitemap:</h4>
            <Link to="/about">About</Link>
            <Link>Careers</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/events">Events</Link>
            <Link to="/exhibits">Exhibits</Link>
            <Link to="/home">Home</Link>
            <Link to="/support">Support</Link>
            <Link to="/venue-rentals">Venue Rentals</Link>

            <br></br>
            <h6>The Chicago Bridgehouse Museum is part of the Friends of the Chicago River</h6>
            <Link to="https://www.chicagoriver.org/">Friends Website</Link>
            <br></br>

            <h6><b>General Info:</b></h6>
            <p><b>Location:</b> South West Bridgetower at Michigan Ave. & Wacker Dr. - 99 Chicago Riverwalk, Chicago, IL 60601
            <br/><b>Hours:</b> Open Seasonally, May - October, Wednesday - Sunday, 10am - 4pm
            <br/><b>Phone:</b>(312) 977-0227</p>

            { currentUser === null ? <Link to="/login">Admin: Login</Link> : <Link onClick={logout} to="/">Admin: Sign Out</Link> }
        </div>
        </>
    )
}