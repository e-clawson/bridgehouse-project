import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Home(){
    return (
         <div className="home">
            <Navbar />
            <Header />
            <h1>Welcome to the McCormick Bridgehouse and River Museum Website!</h1>
            <Footer />
        </div>
    )
}