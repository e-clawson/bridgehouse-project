import { useState } from "react"
import "./filter.css"

export default function Filter({exhibits, setExhibits}){
    const [currentTag, setCurrentTag] = useState("All");

    const handleButtons = (e) => {
        //takes the value string and stores in in the variable word
        let word = e.target.value
        console.log(word)
        //setsCurrentExhibit with the word 
        setCurrentTag(word);
    }
    console.log(currentTag)
    // const filtered = exhibitFilter()
    // //store the return value of exhibit filter in a variable const or let 
    // const [currentTag, setCurrentTag] = useState("All");

    // const handleButtons = (e) => {
    //     //takes the value string and stores in in the variable word
    //     let word = e.target.value
    //     console.log(word)
    //     //setsCurrentExhibit with the word 
    //     setCurrentTag(word);
    // }
    // console.log(currentTag)

    // useEffect(() => {
    //     if (currentExhibit === "All") {
    //         setFilteredExhibit({exhibits})
    //     } else {
    //         const filtered = filteredExhibit.filter((exhibit) =>{
    //             return (
    //                 exhibit.tags === currentExhibit || exhibit.tags.includes(currentExhibit)
    //             );
    //         })
    //         setFilteredExhibit(filtered)
    //         setExhibits(filteredExhibit)
    //     }
    // }) [currentExhibit]

    return(
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
    )
}