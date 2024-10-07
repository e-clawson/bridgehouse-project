import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

export const BASE_URL = 'http://localhost:8000'

function App() {
  //track and update the state of exhibits
  const [exhibits, setExhibits] = useState([])
  //track and update the state of the input box
  const [input, setInput] = useState('')

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
    //make the POST request - fetch 
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
  //right now the delete button is working but it isn't re-rendering the 
  //exhibit list on the page 


  return (
    <>
      <h1>Bridgehouse Project</h1>
      <h2>Exhibits:</h2>
      <div className="exhibit-display">
        {exhibits.map(exhibit => 
          <div key={exhibit._id}>
            <p>{exhibit.title}</p> 
            <button onClick={() => handleDelete(exhibit._id)}>Delete</button>
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

export default App
