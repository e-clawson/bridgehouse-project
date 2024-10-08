import { useState } from 'react'
import { useEffect } from 'react'

export const BASE_URL = 'http://localhost:8000'

export default function Exhibits() {
  //track and update the state of exhibits
  const [exhibits, setExhibits] = useState([])
  //track and update the state of the input box
  const [input, setInput] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  //GET - gets all the exhibits from the database 
  useEffect(() => {
    async function test() {
      const response = await fetch(`${BASE_URL}/exhibits`)
      const data = await response.json()
      console.log(data)
      setExhibits(data)
      console.log(exhibits)
    }
    test()
  }, [])

  //allows you to change the input text 
  function handleChange(e){ 
    setInput(e.target.value)
  }

  //handles the button click of the form 
  async function handleSubmit(e){
    //keeps the page from refreshing
    e.preventDefault()
    // format our data - this should match the schema
    const exhibit = {
      title: input
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
  }

  //make the DELETE request - delete an exhibit by ID 
  async function handleDelete(id) {
    try{
      const response = await fetch(`${BASE_URL}/exhibits/${id}`, {
        method: "DELETE", 
      })
      if (!response.ok) {
        throw new Error("something went wrong - status: " + response.status)
      }
      const newExhibits = exhibits.filter(exhibit => exhibit._id !== id)
      setExhibits(newExhibits)
    } catch(e) {
      console.log("in the catch - something went wrong")
      console.log(e)
    }
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
        title: editText
      })
    })
    const updatedExhibit = await response.json();
    const updatedExhibits = exhibits.map((exhibit) => (exhibit._id === updatedExhibit._id ? updatedExhibit : exhibit));

    setExhibits(updatedExhibits)
  }

  return (
    <>
      <h2>Exhibits:</h2>
      <div className="exhibit-display">
        {exhibits.map(exhibit => 
          <div key={exhibit._id} className='exhibit-card'>
            {isEditing && editId === exhibit._id ? (
               <form onSubmit={() => handleEditSubmit(exhibit._id)}>
               <input
                 type="text"
                 value={editText}
                 onChange={(e) => setEditText(e.target.value)}
               />
               <button type="submit">Update</button>
               </form>
            ) : (
              <>
                <p>{exhibit.title}</p> 
                <button onClick={() => handleDelete(exhibit._id)}>Delete</button>
                <button onClick={() => handleEditClick(exhibit._id, exhibit.text)}>Edit</button>
              </>
            )}
          </div>
        )}
      </div>
      <div className="exhibit-form">
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleChange}/>
          <button>Add</button>
        </form>
      </div>
    </>
  )
}