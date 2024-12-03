import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


export default function Rentals(){
    return (
    <div className="padding">
        <div className="rentals">
            <h1>Rentals</h1>
            <br></br>
        </div>
        <div className="carousel">
        <div id="carouselExampleCaptions" class="carousel slide">
             <div class="carousel-indicators">
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
             </div>

             <div class="carousel-inner">

             <div class="carousel-item active">
                 <img src="/src/assets/Wedding.png" class="d-block w-100" alt="Wedding Taking Place at the Bridgehouse Museum"/>
                <div class="carousel-caption d-none d-md-block">
                     <h5>Weddings</h5>
                    <p>Wow your wedding guests with a purely Chicago experience!</p>
                 </div>
             </div>

             <div class="carousel-item">
                <img src="/src/assets/rentals/table.png" class="d-block w-100" alt="Image of a fancy Dinner table setup in the top of the Bridgehouse Tower "/>
                 <div class="carousel-caption d-none d-md-block">
                    <h5>Private Events and Dinners</h5>
                    <p>The perfect place for a romantic dinner for two or a festive gathering of fifty</p>
                </div>
             </div>

             <div class="carousel-item">
                <img src="/src/assets/rentals/Outside.png" class="d-block w-100" alt="Image looking down from above on a gathering out on the patio"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Parties</h5>
                    <p>A party in our historic landmark bridgetower is one that your guests will never forget!</p>
                 </div>
             </div>

             <div class="carousel-item">
                <img src="src/assets/rentals/firstFloor.png" class="d-block w-100" alt="People gathering and eating and mingling on the first floor of the museum"/>
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
        </div>

        <div className="rental-text padding">
            <h5>Venue Rentals at the Bridgehouse</h5>
            <br/>
            <p>Events at the McCormick Bridgehouse & Chicago River Museum are unparalleled in the City. The Bridgehouse Museum offers rentals for events such as private dinners, cocktail parties, wedding ceremonies and receptions, and bridge lift breakfasts. </p>
            <p> Nestled inside the southwest tower of the Michigan Avenue bridge, the museum celebrates the Chicago River and offers your guests a rare chance to view the inner workings of one of Chicago's most famous movable bridges. 
                The Bridgehouse Museum's interior is a unique and rustic space made up of five floors, complete with exposed brick walls and steel beams. With roughly 1,200 sq. ft. of space and a capacity of 79 people, it is ideal for intimate receptions, both private and corporate. 
            </p><p>Renters are free to work with the caterer of their choice, or one of our preferred caterers. Due to the uniqueness of the building, seated engagements are typically ideal for approximately 25 or less if using the patio space. It is possible to host seated engagements indoors, but tables need to be spread out over the 5 small floors of the museum.</p>   
            <p>Each rental also includes the use of our ~400 square foot Riverwalk plaza, with spectacular views of downtown Chicago visible only from our unique space. 
            </p>
        </div>

        <div className="rental-text background"> 
            <h2> Information: </h2>
            <br></br>
            <h5>Capacity: 79</h5>
            <p>(patio space: about 25)</p>
            <br></br>
            <h5>Floors: 5</h5>
            <br></br>
            <h5>Space: </h5>
            <p>1,200 sq. feet of interior space</p>
            <br></br>
            <h5>Rates:</h5>
            <p>Monday - Thursday: $350/hr
            <br></br>
            Friday - Sunday: $375/hr 
            <br></br>
            (8 A.M. -11 P.M.)</p>
           <br></br>
            <h5>Preferred Caterers:</h5>
            <ul>
                <li>Inspired By Catering</li>
                <li>Blue Plate</li>
                <li>Purple Pig</li>
            </ul>
            <br></br>
            <p> <b>For additional information or to schedule a venue tour, contact Josh Coles at (312) 939-0490, ext. 28, or submit a request below</b> </p>
        </div>


        <div className="background"> 
            <h5>Rental Inquiry:</h5>
             <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="name" class="form-control" id="name" placeholder="Name"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Preferred Date</label>
                <input type="date" class="form-control" id="exampleFormControlInput1" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Type of Event</label>
                <input type="name" class="form-control" id="name" placeholder="Ex: Wedding"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Expected Guest Count</label>
                <input type="name" class="form-control" id="name" placeholder="Ex: 50"/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="button">Submit</button>
        </div>
    </div>
    )
}