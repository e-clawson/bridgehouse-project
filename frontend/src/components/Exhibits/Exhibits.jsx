import { useState } from 'react'
import { Link, useParams } from "react-router-dom"
import "./exhibits.css"
import Search from '../Search'
import Filter from "./Filter"
import ExhibitForm from './ExhibitForm'
import AddExhibit from './AddExhibit'

export const BASE_URL = 'http://localhost:8000'

export default function Exhibits({currentUser, exhibits, setExhibits}) {
//move everything from filter here to get it to work - move the buttons to here 

const [currentTag, setCurrentTag] = useState("All");

    const handleButtons = (e) => {
        //takes the value string and stores in in the variable word
        let word = e.target.textContent
        console.log(word)
        //setsCurrentExhibit with the word 
        setCurrentTag(word);
    }
    console.log(currentTag)

    function handleFilter(){
      if (currentTag === "All") {
            return exhibits
      } else {
          const filtered = exhibits.filter((exhibit) =>{
            // console.log(exhibit)
                return exhibit.tags === currentTag || exhibit.tags?.includes(currentTag)
                    //? checks if tags exists before using the includes method 
                })
                return filtered
      }
    }
    const filtered = handleFilter()

  return (
    <div>
      <div className='filter-search'>
      <div className="filter-box">
            <h3 className="filter-title">Select A Topic or Search:</h3>
            <div className="filter-btn-box">
                <div className="filter-btn" type="button" value="All" onClick={handleButtons}>All</div>
                <div className="filter-btn" type="button" value="Architecture" onClick={handleButtons}>Architecture</div>
                <div className="filter-btn" type="button" value="Bridges and Engineering" onClick={handleButtons}>Bridges and Engineering</div>
                <div className="filter-btn" type="button" value="History" onClick={handleButtons}>History</div>
                <div className="filter-btn" type="button" value="Nature" onClick={handleButtons}>Nature</div>
                <div className="filter-btn" type="button" value="People" onClick={handleButtons}>People</div>
                <div className="filter-btn" type="button" value="Public Health" onClick={handleButtons}>Public Health</div>
                <div className="filter-btn" type="button" value="River" onClick={handleButtons}>River</div>
            </div>
        </div>
        {/* <Filter exhibits={exhibits} setExhibits={setExhibits}/>
        <Search exhibits={exhibits} setExhibits={setExhibits}/> */}
      </div>
      {/* made the searchbar component but need to get it to display just the
      mapped items matching the search */}
      <h2>Exhibits:</h2>
      <div className='exhibit-display'>
        {filtered.map(exhibit =>
        <div className='exhibit-card' key={exhibit._id}>
          <h2>{exhibit.title}</h2> 
          <h4>{exhibit.subtitle}</h4> 
          <img src={exhibit.image}></img>
          <p>{exhibit.imgCaption}</p>
          {/* need to add styling to limit the number of lines that display */}
          <p className="page-content">{exhibit.pageContent}</p>
          <Link to={`/exhibits/${exhibit._id}`}>Read More...</Link>
        </div>
        )}
      </div>
      <div className="form-display">
        { currentUser !== null ? (<div> 
          <AddExhibit exhibits={exhibits} setExhibits={setExhibits}/>
        </div>) : (
          <></>
        )
        }
      </div>
    </div>
  )
}