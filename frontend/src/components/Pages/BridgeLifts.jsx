import { useState } from 'react'
import { Link } from "react-router-dom"
import "../Exhibits/exhibits.css"

export const BASE_URL = import.meta.env.VITE_BASE_URL || VITE_BASE_URL

export default function BridgeLifts({currentUser, exhibits, setExhibits}){
    const [currentTag, setCurrentTag] = useState("Bridges and Engineering");

    function handleFilter(){
        const filtered = exhibits.filter((exhibit) =>{
        // console.log(exhibit)
        return exhibit.tags === currentTag || exhibit.tags?.includes(currentTag)
            //? checks if tags exists before using the includes method 
        })
        return filtered
    }
      const filtered = handleFilter()
    

    return (
         <div className="bridge-lifts" class="padding">
           
            <h1>Bridge Lifts</h1>
            {/* evenutally I will add either a slideshow or the video of the bridge here */}
            <img src="../src/assets/homepage/BridgeLift.png" class="center" alt="Image of the Museum with the Bridge lifting in the background"/>
            <br></br>
            <h3>It is quite a scene when Michigan Avenue meets the sky.</h3>
            <p>To accommodate sail boats and other tall vessels traveling between the Chicago River and Lake Michigan, Chicago's bridges open approximately 40 times a year from April to November. Witnessing the Michigan Avenue Bridge opening from inside the McCormick Bridgehouse & Chicago River Museum is quite a treat.</p>
            <p>One spectator raved, “Watching the massive Michigan Avenue Bridge rise to the sky from inside the bridge is amazing. Powered by just a tiny 108 horsepower motor, the gears turn, the bridge rises - and you can’t help but be awed by the ingenuity of it all.” </p>
            <p>We invite you to experience this engineering marvel up close and personal by attending a bridge lift at the museum.</p>
            <h3>See the Bridge Lift:</h3>
            <p>Tickets details for a Bridge Lift vary per season. Please check our events page to get more details during the Spring and Fall. If interested in a private rental for a bridge lift, please contact Josh Coles at jcoles@chicagoriver.org</p>
            <p>Please note that even though a bridge lift is scheduled, Friends cannot guarantee that it will take place. The City of Chicago Department of Transportation executes bridge lifts only if sail boats sign up for the run, and factors such as technical malfunctions may cancel a day’s lift.  Refunds can only be made up to three days prior to the event.</p>
            <h3>See the schedule <a href="https://chicagoloopbridges.com/schedule.html">here</a></h3>
            <p>Advance registration is required for Saturday bridge lifts. For more information or to reserve your spot, call the museum at (312) 977-0227.</p>
            <p><a href='https://s3.amazonaws.com/chicagoriver/rich/rich_files/rich_files/956/original/bridge-20lift-20cancellation-20policy-20fall-20updated-208-2011.pdf'>Read about bridge lift details and cancellation policy </a>(PDF)</p>
            <p>Learn more about the Michigan Avenue Bridge (now DuSable Bridge) at <a href="ChicagoLoopBridges.com">ChicagoLoopBridges.com</a> and <a href="HistoricBridges.org">HistoricBridges.org</a></p>

            <br></br>

            <h4>Check out Our info on the DuSable Bridge/Chicago Bridges: </h4>
            {/* eventually I will put a filtered map of exhibits here to get just the bridge exhibits to show up */}
            
            <div className='exhibit-display'>
                <>
                {filtered.map(exhibit =>
                    <div className='exhibit-card' key={exhibit._id}>
                        <h2>{exhibit.title}</h2> 
                        <h4>{exhibit.subtitle}</h4> 
                        <img src={exhibit.image}></img>
                        <p>{exhibit.imgCaption}</p>
                        {/* need to add styling to limit the number of lines that display */}
                        {/* <p className="page-content">{exhibit.pageContent}</p> */}
                    <Link to={`/exhibits/${exhibit._id}`}>Read More...</Link>
                </div>)}
                </>
            </div>
        </div>
    )
}