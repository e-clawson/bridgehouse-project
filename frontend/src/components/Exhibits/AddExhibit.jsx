import { useState } from 'react'

export const BASE_URL = import.meta.env.VITE_BASE_URL || VITE_BASE_URL

export default function AddExhibit({exhibits, setExhibits}){
    const [formData, setFormData] = useState({
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
  //allows you to change the input text 
  function handleChange(e){ 
    const { name, value } = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

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
    //once everything is done, reset the form to empty
    setFormData("")
    //notreaching this setFormData for some reason 
  }

  return(
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
                    <option disabled value="" >Select...</option>
                    <option value={0}>0 </option>
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
                <label>Tags (Please use only the following: Architecture, Bridges and Engineering, History, Nature, People, Public Health, River, Other )
                <input value={formData.tags} name="tags" id="tags" onChange={handleChange}/>
                </label>
            </div>
        </div>
        <button>Add</button>
    </form>
    
  )



}