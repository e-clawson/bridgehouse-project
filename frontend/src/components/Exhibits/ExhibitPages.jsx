import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'

export const BASE_URL = 'http://localhost:8000'

export default function ExhibitPages({currentUser, exhibits, exhibitId}){
 
    const [exhibitDisplay, setExhibitDisplay] = useState({})
    console.log(exhibitId)

    useEffect(() => {
        async function test() {
          const response = await fetch(`${BASE_URL}/exhibits/${exhibitId}`)
          const data = await response.json()
          console.log(data) 
          setExhibitDisplay(data)
          console.log(exhibitDisplay)
        }
        test()
      }, [])

    return(
        <div className="exhibit-page" id={exhibitDisplay._id}>
            <h2>{exhibitDisplay.title}</h2> 
            <h4>{exhibitDisplay.subtitle}</h4> 
            <h5>{exhibitDisplay.dateString}</h5>
            <img src={exhibitDisplay.image}></img>
            <p>{exhibitDisplay.imgCaption}</p>
            <p>{exhibitDisplay.pageContent}</p>
            <p><a>{exhibitDisplay.additionalResoucres}</a></p>
        </div>
    )
}