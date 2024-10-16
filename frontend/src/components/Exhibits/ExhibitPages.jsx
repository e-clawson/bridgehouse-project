import { useState } from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import DeleteExhibit from './DeleteExhibit'
import ExhibitForm from './ExhibitForm'

export const BASE_URL = 'http://localhost:8000'

export default function ExhibitPages({currentUser, exhibits, setExhibits, exhibitId}){
    const [isEditing, setIsEditing] = useState(false)
    let id = useParams()
    const newExhibitId = id.exhibitId
    const [exhibitDisplay, setExhibitDisplay] = useState({})
    const [inputData, setInputData] = useState({
      title: "", 
      subtitle: "", 
      floor: 0, 
      dateNum: "", 
      dateString: "", 
      image: "",
      imgCaption: "",
      pageContent: "", 
      additionalResources: "", 
      tags: "", 
    })
    const [formData, setFormData] = useState({exhibitDisplay})
    
    
   
    // sets the page with data for the specific exhibit by id 
    useEffect(() => {
        async function test() {
          const response = await fetch(`${BASE_URL}/exhibits/${newExhibitId}`)
          const data = await response.json()
          setExhibitDisplay(data)
        }
        test()
      }, [])

    console.log(exhibitDisplay)
    
    //edit form things:

    const addEditForm = (exhibitDisplay) => {
        setIsEditing(true)
        function editData(exhibitDisplay){
            let {title, subtitle, floor, dateNum, dateString, image, imgCaption, pageContent, additionalResources, tags } = exhibitDisplay
            setInputData({title, subtitle, floor, dateNum, dateString, image, imgCaption, pageContent, additionalResources, tags})
            console.log(title)
        }
        editData(exhibitDisplay)
    }

    function handleEditChange(e){ 
        const { name, value } = e.target;
        setInputData({...inputData, [name]: value})
    }

    //make a PATCH request - edit the exhibit by ID 
    async function handleEditSubmit(newExhibitId) {
        e.preventDefault()
        
        const exhibit = {
            title: formData.title, 
            subtitle: formData.subtitle, 
            floor: formData.floor, 
            dateNum: formData.dateNum, 
            dateString: formData.dateString, 
            image: formData.image,
            imgCaption: formData.imgCaption,
            pageContent: formData.pageContent, 
            additionalResources: formData.additionalResources, 
            tags: formData.tags, 
          }

        const response = await fetch(`${BASE_URL}/exhibits/${newExhibitId}`, {
          method: "PUT", 
          body: JSON.stringify(exhibit),
          headers: { "Content-Type": "application/json" },
          
        })
        const updatedExhibit = await response.json();
        const updatedExhibits = exhibits.map((exhibit) => (exhibit._id === updatedExhibit._id ? updatedExhibit : exhibit));
    
        setExhibits(updatedExhibits)
        setFormData("")
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
                {isEditing !== true? (<button onClick={()=>addEditForm(exhibitDisplay)}>Edit</button>)
                : 
                <>
                <div>
                <form id="exhibitForm" >
                <div className="editform" onSubmit={handleEditSubmit}>
                  <h3>Edit: </h3>
                    <div>
                      <label>Title
                      <input value={inputData.title} name="title" id="title" onChange={handleEditChange}/>
                      </label>
                    </div>
                    <div>
                      <label >Sub-Title
                      <input value={inputData.subtitle} name="subtitle" id="subtitle" onChange={handleEditChange}/>
                      </label>
                    </div>
                    <div>
                      <label >Museum Floor
                      <select type="number" value={inputData.floor} name="floor" id="floor" onChange={handleEditChange}>
                        <option disabled value="">Select...</option>
                        <option value={0} >0 </option>
                        <option value={1}>1 </option>
                        <option value={2}>2 </option>
                        <option value={3}>3 </option>
                        <option value={4}>4 </option>
                        <option value={5}>5 </option>
                      </select>
                      </label>
                    </div>
                    <div>
                      <label>Date (number only: mm-dd-yyyy)
                      <input type={inputData.dateNum} value={""} name="dateNum" id="dateNum" onChange={handleEditChange}/>
                      </label>
                    </div>
                    <div>
                      <label> Date in text and numbers (ex: "March 1, 1900")
                      <input value={inputData.dateString} name="dateString" id="dateString" onChange={handleEditChange}/>
                      </label>
                    </div>
                    <div>
                      <label> Image
                      <input type="file" value={""} name="image" id="image" onChange={handleEditChange}/>
                      </label>
                    </div>
                    <div>
                      <label>Image Caption
                      <input value={inputData.imgCaption} name="imgCaption" id="imgCaption" onChange={handleEditChange}/>
                      </label>
                    </div>
                    <div>
                      <label>Page Content
                      <textarea value={inputData.pageContent} name="pageContent" id="pageContent" onChange={handleEditChange}/>
                      </label>
                    </div>
                    <div>
                      <label>Additional Resources (links, citations)
                      <input value={inputData.additionalResources} name="additionalResources" id="additionalResources" onChange={handleEditChange}/>
                      </label>
                    </div>
                    <div>
                      <label>Tags (Please use only the following: Architecture, Bridges and Engineering, History, Nature, Public Health, Other )
                      <input value={inputData.tags} name="tags" id="tags" onChange={handleEditChange}/>
                      </label>
                    </div>
                </div>
                <button>Update</button>
                </form>
            </div>
             </>}
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