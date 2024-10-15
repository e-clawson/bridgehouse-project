import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'

export const BASE_URL = 'http://localhost:8000'

export default function ExhibitPages(){
    const {id} = useParams()
    const [exhibitDisplay, setExhibitDisplay] = useState({})

    useEffect(() => {
        async function test() {
          const response = await fetch(`${BASE_URL}/exhibits/${id}`)
          const data = await response.json()
          console.log(data)
          setExhibitDisplay(data)
          console.log(exhibitDisplay)
        }
        test()
      }, [])

    return(
        <div className="exhibit-page">
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