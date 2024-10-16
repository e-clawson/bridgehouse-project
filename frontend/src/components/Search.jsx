import React from "react"
import { useState } from "react"

export default function Search({exhibits, setExhibits}){
    const [searchInput, setSearchInput] = useState("");
    
// I want to be able to search by something (title?) and if that 
//exhibit card contains any part of that title, to return that card only 
//this means I will need to pass exhibits a different array to display 

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);

      if (searchInput.length > 0) {
        exhibits.filter((exhibit) => {
        return exhibit.title.match(searchInput);
    })}
    }
    
    return (
    
    <div>
        <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput} />

    </div>
    )
}