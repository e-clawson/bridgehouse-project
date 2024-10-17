import { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export const BASE_URL = import.meta.env.VITE_BASE_URL || VITE_BASE_URL

export default function DeleteExhibit({exhibits, setExhibits, exhibitId, id}){
    const navigate = useNavigate()

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
      navigate("/exhibits")
    } catch(e) {
      console.log("in the catch - something went wrong")
      console.log(e)
    }
  }

  return(
    <button onClick={()=> handleDelete(id)}>Delete</button>
  )


}