import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Home(){
    return (
    <div className="padding">

    <div className="home" class="padding">
        <h1>Welcome to the McCormick Bridgehouse and River Museum Website!</h1>
        <br></br>
    </div>

    <div className="carousel">
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
    </div>

    <br></br>

    <h5>The McCormick Bridgehouse & Chicago River Museum celebrates the Chicago River and its world-famous movable bridges.</h5>
    <p>Beginning at river level and spiraling five stories up, the McCormick Bridgehouse & Chicago River Museum provides a one-of-a-kind opportunity to explore a historic landmark bridgehouse.</p>
    <p>At river level, visitors can view the massive gears of Chicago’s most famous movable bridge and then journey through time as they experience the story of the Chicago River. Once at the top of the Bridgehouse, visitors are treated to magnificent 360 degree views of the city and river, and will gain a whole new perspective on the beauty and complexity that is Chicago.</p>
    <p>The Bridgehouse Museum furthers the mission of <a href="https://www.chicagoriver.org/">Friends of the Chicago River.</a></p>

    </div>
    )
}