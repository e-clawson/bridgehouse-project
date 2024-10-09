import "./filter.css"
export default function Filter(){
    return(
        <div className="filter-box">
            <h3 className="filter-title">Select A Topic or Search:</h3>
            <div className="filter-btn-box">
                <div className="filter-btn">Architecture</div>
                <div className="filter-btn">Bridges and Engineering</div>
                <div className="filter-btn">History</div>
                <div className="filter-btn">Nature</div>
                <div className="filter-btn">Public Health</div>
            </div>
        </div>
    )
}