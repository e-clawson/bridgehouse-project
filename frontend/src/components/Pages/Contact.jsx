import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Contact(){
    return (
         <div className="contact" class="padding">
           
            <h1>Contact Us:</h1>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="name" class="form-control" id="name" placeholder="Name"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button>Submit</button>
         
        </div>
    )
}