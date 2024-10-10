import React from "react";
import { useState } from "react";
import {auth} from "../../config"
import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom"

export default function SignIn({setCurrentUser}){
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [loading, setLoading] = useState(null)
    
    const handleLogin = async (e) => {
        e.preventDefault()

        console.log("submit", email, password)

        // let response = await signInWithEmailAndPassword(auth, email, password)
        //     console.log(response.user)
        //     setCurrentUser(response.user)
        //     navigate("/")

        try {
            let response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response.user)
            navigate("/")
            setCurrentUser(response.user)
        } catch (error){
            console.log(error)
            setError(error.code)
        }
    }  

    return(
        <div>
            <h3>Admin Login Form: </h3>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button>Log In</button>
                </div>
                <div>
                    {/* {loading && <h5>Loading...</h5>}
                    {success && <h5 style={{color: "green"}}>Login Successful</h5>}
                    {error && <h5 style={{color: "red"}}>{error}</h5>} */}
                </div>
            </form>
        </div>
    )
}