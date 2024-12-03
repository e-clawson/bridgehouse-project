import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Home(){
    return (
    <>

    <div className="home" class="padding">
        <h1>Welcome to the McCormick Bridgehouse and River Museum Website!</h1>
        <br></br>
    </div>

    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../src/assets/homepage/ThirdFloor.png" class="d-block w-100" alt="The third floor of the museum"/>
            </div>
            <div class="carousel-item">
                <img src="../src/assets/homepage/museumOutside.png" class="d-block w-100" alt="Outside view of the Bridgehouse Museum and Chicago river from the bridge"/>
            </div>
            <div class="carousel-item">
                <img src="../src/assets/homepage/Gears.png" class="d-block w-100" alt="Image of the gears that operate the DuSable Bridge"/>
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <br></br>

    </>
    )
}