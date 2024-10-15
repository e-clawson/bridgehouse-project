import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import DeleteExhibit from './DeleteExhibit'

export const BASE_URL = 'http://localhost:8000'

export default function ExhibitPages({currentUser, exhibits, setExhibits, exhibitId}){
    let id = useParams()
    const [exhibitDisplay, setExhibitDisplay] = useState({})
   console.log(id.exhibitId)

    useEffect(() => {
        async function test() {
          const response = await fetch(`${BASE_URL}/exhibits/${id.exhibitId}`)
          const data = await response.json()
          console.log(data) 
          setExhibitDisplay(data)
        }
        test()
      }, [])

    return(
        <div className="exhibit-page" id={id.exhibitId}>
            <h2>{exhibitDisplay.title}</h2> 
            <h4>{exhibitDisplay.subtitle}</h4> 
            <h5>{exhibitDisplay.dateString}</h5>
            <img src={exhibitDisplay.image}></img>
            <p>{exhibitDisplay.imgCaption}</p>
            <p>{exhibitDisplay.pageContent}</p>
            <p><a>{exhibitDisplay.additionalResoucres}</a></p>
            { currentUser !== null ? 
            <div>
                <button>Edit</button>
                <DeleteExhibit id={id.exhibitId} exhibits={exhibits} setExhibits={setExhibits}/>
            </div> :
            <div></div>            
            }
        </div>
    )
}