import React from "react"
import { useState } from "react"

export default function Search(){
    const [searchInput, setSearchInput] = useState("");
    
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