import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import DeleteExhibit from './DeleteExhibit'
import ExhibitForm from './ExhibitForm'

export const BASE_URL = 'http://localhost:8000'

export default function ExhibitPages({currentUser, exhibits, setExhibits, exhibitId}){
    const [isEditing, setIsEditing] = useState(false)

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

    const addEditForm = () => {
        setIsEditing(true)
    }

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
                <DeleteExhibit id={id.exhibitId} exhibits={exhibits} setExhibits={setExhibits}/>
                {isEditing !== true? (<button onClick={addEditForm}>Edit</button>)
                : (<ExhibitForm isEditing={isEditing} setIsEditing={setIsEditing}/>)}
            </div> :
            <div></div>            
            }
        </div>
    )
}


// /* <div className="form-display">
// { currentUser !== null ? (<div> 
//   <ExhibitForm />
// </div>) : (
//   <></>
// )
// }

// <ExhibitForm id={id.exhibitId} exhibits={exhibits} setExhibits={setExhibits}/>