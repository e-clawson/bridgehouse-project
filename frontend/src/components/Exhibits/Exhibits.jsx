import { useState } from 'react'
import { Link, useParams } from "react-router-dom"
import "./exhibits.css"
import Search from '../Search'
import Filter from "./Filter"
import ExhibitForm from './ExhibitForm'

export const BASE_URL = 'http://localhost:8000'

export default function Exhibits({currentUser, exhibits, setExhibits}) {

  return (
    <div>
      <div className='filter-search'>
        <Filter />
        <Search />
      </div>
      {/* made the searchbar component but need to get it to display just the
      mapped items matching the search */}
      <h2>Exhibits:</h2>
      <div className='exhibit-display'>
        {exhibits.map(exhibit =>
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
          <ExhibitForm />
        </div>) : (
          <></>
        )
        }
      </div>
    </div>
  )
}



      {/* <h2>Exhibits:</h2>
      <div className="exhibit-display">
        {exhibits.map(exhibit => 
          <div key={exhibit._id} className='exhibit-card'>
            { currentUser !== null ? <div>
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
                 <h2>{exhibit.title}</h2> 
                 <h4>{exhibit.subtitle}</h4> 
                 <img src={exhibit.image}></img>
                 <p>{exhibit.imgCaption}</p>
                 <p>{exhibit.pageContent}</p>
                 <button onClick={() => handleEditClick(exhibit._id, exhibit.text)}>Edit</button>
                 <Link to={`/exhibits/${exhibit._id}`}>Read More...</Link>
               </>
             )}
            </div> : 
            <div key={exhibit._id} className='exhibit-card'>
              <h2>{exhibit.title}</h2> 
              <h4>{exhibit.subtitle}</h4> 
              <img src={exhibit.image}></img>
              <p>{exhibit.imgCaption}</p>
              <p>{exhibit.pageContent}</p>
              <Link to={`/exhibits/${exhibit._id}`}>Read More...</Link>
            </div>}
            
          </div>
        )}
      </div> */}