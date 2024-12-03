import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


export default function Rentals(){
    return (
    <>
        <div className="rentals">
            <h1>Rentals</h1>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide">
             <div class="carousel-indicators">
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
             </div>
             <div class="carousel-inner">
             <div class="carousel-item active">
                 <img src= "../../assets/rentals/Wedding.png" class="d-block w-100" alt="Wedding Taking Place at the Bridgehouse Museum"/>
             <div class="carousel-caption d-none d-md-block">
             <h5>Weddings</h5>
             <p>Wow your wedding guests with a purely Chicago experience!</p>
             </div>
             </div>

             <div class="carousel-item">
             <img src="/Users/elizabethclawson/Desktop/per-scholas-work/bridgehouse-project/frontend/src/assets/rentals/table.png" class="d-block w-100" alt="Image of a fancy Dinner table setup in the top of the Bridgehouse Tower "/>
             <div class="carousel-caption d-none d-md-block">
                 <h5>Private Events and Dinners</h5>
                 <p>The perfect place for a romantic dinner for two or a festive gathering of fifty</p>
             </div>
             </div>

             <div class="carousel-item">
             <img src="/Users/elizabethclawson/Desktop/per-scholas-work/bridgehouse-project/frontend/src/assets/rentals/Outside.png" class="d-block w-100" alt="Image looking down from above on a gathering out on the patio"/>
             <div class="carousel-caption d-none d-md-block">
                 <h5>Parties</h5>
                 <p>A party in our historic landmark bridgetower is one that your guests will never forget!</p>
             </div>
             </div>

             <div class="carousel-item">
             <img src="../frontend/src/assets/rentals/first floor.png" class="d-block w-100" alt="People gathering and eating and mingling on the first floor of the museum"/>
             <div class="carousel-caption d-none d-md-block">
                 <h5>Corporate Events and Meetings</h5>
                 <p>Host your next work event, meeting, or mixer in an iconic Chicago Landmark</p>
             </div>
             </div>
             
             </div>
             
             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Previous</span>
             </button>
             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Next</span>
             </button>
        </div>
    
    </>
    )
}