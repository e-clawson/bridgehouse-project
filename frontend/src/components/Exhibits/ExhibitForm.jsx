import { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export const BASE_URL = 'http://localhost:8000'

export default function ExhibitForm({isEditing, setIsEditing}){
    const [input, setInput] = useState('')
    // const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");
    const [formData, setFormData] = useState({
        title: "", 
        subtitle: "", 
        floor: "", 
        dateNum: "", 
        dateString: "", 
        image: "",
        imgCaption: "",
        pageContent: "", 
        additionalResources: "", 
        tags: "", 
      })

    //allows you to change the input text 
  function handleChange(e){ 
   
    const { name, value } = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

    //handles the button click of the form 
  async function handleSubmit(e){
    //keeps the page from refreshing
    e.preventDefault()
    // format our data - this should match the schema
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

    //make the POST request - create a new exhibit display
    const response = await fetch(`${BASE_URL}/exhibits`, {
      method: 'POST',
      body: JSON.stringify(exhibit),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const newExhibit = await response.json()
    setExhibits([...exhibits, newExhibit])
    console.log(newExhibit)
    console.log(exhibits)
    //once everything is done, reset the form to empty
    setInput("")
    //notreaching this setInput for some reason 
  }

  //this part is for editing 

  const handleClick = () => {
    setIsEditing(true)
  }

    //make a PATCH request - edit the exhibit by ID 
    const handleEditClick = (id, text) => {
        setIsEditing(true);
        setEditId(id);
        setEditText(text);
      };
    
      async function handleEditSubmit(id) {
        const exhibit = exhibits.find((exhibit) => exhibit._id == id);
    
        const response = await fetch(`${BASE_URL}/exhibits/${exhibit._id}`, {
          method: "PUT", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: editText,
          })
        })
        const updatedExhibit = await response.json();
        const updatedExhibits = exhibits.map((exhibit) => (exhibit._id === updatedExhibit._id ? updatedExhibit : exhibit));
    
        setExhibits(updatedExhibits)
      }


    return(
        <>
        <div>
            {isEditing === true ? (
            <>
                 <form id="exhibitForm" >
                <div>
                  <h3>Edit: </h3>
                    <div>
                      <label>Title
                      <input value={formData.title} name="title" id="title" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label >Sub-Title
                      <input value={formData.subtitle} name="subtitle" id="subtitle" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label >Museum Floor
                      <select value={formData.floor} name="floor" id="floor" onChange={handleChange}>
                        <option disabled value="">Select...</option>
                        <option value="0" >0 </option>
                        <option value="1">1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 </option>
                      </select>
                      </label>
                    </div>
                    <div>
                      <label>Date (number only: mm-dd-yyyy)
                      <input type="date" value={formData.dateNum} name="dateNum" id="dateNum" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label> Date in text and numbers (ex: "March 1, 1900")
                      <input value={formData.dateString} name="dateString" id="dateString" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label> Image
                      <input type="file" value={formData.image} name="image" id="image" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label>Image Caption
                      <input value={formData.imgCaption} name="imgCaption" id="imgCaption" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label>Page Content
                      <textarea value={formData.pageContent} name="pageContent" id="pageContent" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label>Additional Resources (links, citations)
                      <input value={formData.additionalResources} name="additionalResources" id="additionalResources" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label>Tags (Please use only the following: Architecture, Bridges and Engineering, History, Nature, Public Health, Other )
                      <input value={formData.tags} name="tags" id="tags" onChange={handleChange}/>
                      </label>
                    </div>
                    {/* <div>
                    <p>Tags</p>
                        <input type="checkbox" value="Architecture" onChange={checkboxHandler}>Architecture</input>
                        <input type="checkbox" value="Bridges and Engineering" onChange={checkboxHandler}>Bridges and Engineering</input>
                        <input type="checkbox" value="History" onChange={checkboxHandler}>History</input> 
                        <input type="checkbox" value="Nature" onChange={checkboxHandler}>Nature</input> 
                        <input type="checkbox" value="Public Health" onChange={checkboxHandler}>Public Health</input>
                        <input type="checkbox" value="Other" onChange={checkboxHandler}>Other</input> 
                    </div> */}
                  </div>
                <button>Update</button>
              </form>
            </>
            ): (
                <form id="exhibitForm" onSubmit={handleSubmit}>
                <div>
                  <h3>Add A Topic:</h3>
                    <div>
                      <label>Title
                      <input value={formData.title} name="title" id="title" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label >Sub-Title
                      <input value={formData.subtitle} name="subtitle" id="subtitle" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label >Museum Floor
                      <select value={formData.floor} name="floor" id="floor" onChange={handleChange}>
                        <option disabled value="">Select...</option>
                        <option value="0" >0 </option>
                        <option value="1">1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 </option>
                      </select>
                      </label>
                    </div>
                    <div>
                      <label>Date (number only: mm-dd-yyyy)
                      <input type="date" value={formData.dateNum} name="dateNum" id="dateNum" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label> Date in text and numbers (ex: "March 1, 1900")
                      <input value={formData.dateString} name="dateString" id="dateString" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label> Image
                      <input type="file" value={formData.image} name="image" id="image" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label>Image Caption
                      <input value={formData.imgCaption} name="imgCaption" id="imgCaption" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label>Page Content
                      <textarea value={formData.pageContent} name="pageContent" id="pageContent" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label>Additional Resources (links, citations)
                      <input value={formData.additionalResources} name="additionalResources" id="additionalResources" onChange={handleChange}/>
                      </label>
                    </div>
                    <div>
                      <label>Tags (Please use only the following: Architecture, Bridges and Engineering, History, Nature, Public Health, Other )
                      <input value={formData.tags} name="tags" id="tags" onChange={handleChange}/>
                      </label>
                    </div>
                    {/* <div>
                    <p>Tags</p>
                        <input type="checkbox" value="Architecture" onChange={checkboxHandler}>Architecture</input>
                        <input type="checkbox" value="Bridges and Engineering" onChange={checkboxHandler}>Bridges and Engineering</input>
                        <input type="checkbox" value="History" onChange={checkboxHandler}>History</input> 
                        <input type="checkbox" value="Nature" onChange={checkboxHandler}>Nature</input> 
                        <input type="checkbox" value="Public Health" onChange={checkboxHandler}>Public Health</input>
                        <input type="checkbox" value="Other" onChange={checkboxHandler}>Other</input> 
                    </div> */}
                  </div>
                <button>Add</button>
              </form>
    
            )}
        </div>
            
     </>

    )
}