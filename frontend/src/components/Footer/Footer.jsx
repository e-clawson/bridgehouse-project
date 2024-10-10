import react from 'react'
import {Link} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from '../../config'


export default function Footer({userAuth,setUserAuth}){

    const logout = async ()=> {
        console.log("made it inside logout")
        await signOut(auth)
        console.log("sign out successful")
        setUserAuth(null)

    }

    return (
        <>
        <div className="footer">
            <h4>Sitemap:</h4>
            { userAuth === null ? <Link to="/login">Admin Login</Link> : <Link onClick={logout} to="/">Sign Out</Link> }
        </div>
        </>
    )
}