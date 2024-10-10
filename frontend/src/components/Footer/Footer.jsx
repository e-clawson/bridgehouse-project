import react from 'react'
import {Link} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from '../../config'
import {useNavigate} from 'react-router-dom'


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
            { currentUser === null ? <Link to="/login">Admin Login</Link> : <Link onClick={logout} to="/">Sign Out</Link> }
        </div>
        </>
    )
}