import './header.css'
import logo from '../../assets/logo.jpg'

export default function Header(){
    return (
        <>
        <div className="header">
            <div className="logo">
                <img src={logo} alt="bridgehouse museum logo"></img>
            </div>
            <br></br>
            <br></br>
            <h1 className="sub-title">Celebrating the Chicago River and its World-Famous Moveable Bridges</h1>
            <div className="wave"></div>
        </div>
        </>
    )
}