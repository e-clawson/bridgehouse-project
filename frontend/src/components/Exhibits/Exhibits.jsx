import { useState } from 'react'
import { Link, useParams } from "react-router-dom"
import "./exhibits.css"
import Search from '../Search'
import Filter from "./Filter"
import ExhibitForm from './ExhibitForm'
import AddExhibit from './AddExhibit'

export const BASE_URL = 'http://localhost:8000'

export default function Exhibits({currentUser, exhibits, setExhibits}) {
  const [searchInput, setSearchInput] = useState("");
  const [currentTag, setCurrentTag] = useState("All");
  const [isSearching, setIsSearching] = useState(false)

  //filter stuff
    const handleButtons = (e) => {
        if (isSearching !== false){
          setIsSearching(false)
        }
        //takes the value string and stores in in the variable word
        let word = e.target.textContent
        //setsCurrentExhibit with the word 
        setCurrentTag(word);
    }

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

//search stuff 
    const handleSearchText = (e) => {
      setIsSearching(true)
      e.preventDefault()
      let search = e.target.value
      let searchRight = search.toLowerCase()
      console.log(searchRight)
      // setSearchInput(searchRight);
      setSearchInput(searchRight)
    }

    //works but is case sensitive 
    function handleSearch(){
      if (searchInput.length > 0) {
        const searched = exhibits.filter((exhibit) => {
          return exhibit.title.toLowerCase() === searchInput|| exhibit.title.toLowerCase()?.includes(searchInput)
        })
        return searched
      } else {
      return exhibits
    }
  }
    const searchResult = handleSearch()
    console.log(searchResult)

  return (
    <div>
      <div className='filter-search'>
      <div className="filter-box">
            <h3 className="filter-title">Select A Topic or Search:</h3>
            <div className="filter-btn-box">
                <div className="filter-btn" type="button" onClick={handleButtons}>All</div>
                <div className="filter-btn" type="button" onClick={handleButtons}>Architecture</div>
                <div className="filter-btn" type="button" onClick={handleButtons}>Bridges and Engineering</div>
                <div className="filter-btn" type="button" onClick={handleButtons}>History</div>
                <div className="filter-btn" type="button" onClick={handleButtons}>Nature</div>
                <div className="filter-btn" type="button" onClick={handleButtons}>People</div>
                <div className="filter-btn" type="button" onClick={handleButtons}>Public Health</div>
                <div className="filter-btn" type="button" onClick={handleButtons}>River</div>
            </div>
        </div>
        <div className='search'>
          <form>
            <input type="text" value={searchInput} placeholder="Search by Title" onChange={handleSearchText}/>
          </form>
        </div>
      </div>
      {/* made the searchbar component but need to get it to display just the
      mapped itemtem s matching the search */}
      <h2>Exhibits:</h2>
      <div className='exhibit-display'>
        {isSearching === true? 
        <>
        {searchResult.map(exhibit =>
        <div className='exhibit-card' key={exhibit._id}>
          <h2>{exhibit.title}</h2> 
          <h4>{exhibit.subtitle}</h4> 
          <img src={exhibit.image}></img>
          <p>{exhibit.imgCaption}</p>
          {/* need to add styling to limit the number of lines that display */}
          {/* <p className="page-content">{exhibit.pageContent}</p> */}
          <Link to={`/exhibits/${exhibit._id}`}>Read More...</Link>
        </div>
        )}
        </>
        : <>{filtered.map(exhibit =>
          <div className='exhibit-card' key={exhibit._id}>
            <h2>{exhibit.title}</h2> 
            <h4>{exhibit.subtitle}</h4> 
            <img src={exhibit.image}></img>
            <p>{exhibit.imgCaption}</p>
            {/* need to add styling to limit the number of lines that display */}
            {/* <p className="page-content">{exhibit.pageContent}</p> */}
            <Link to={`/exhibits/${exhibit._id}`}>Read More...</Link>
          </div>
          )}
          </>}
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