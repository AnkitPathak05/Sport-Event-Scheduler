import { useState,useEffect } from "react"
import "./filterbox.css"
import { SportsEvents } from "../../database/Eventdata"
export const Filterbox = ({getdatesport, check})=>{

    const [selectedSport, setselectedSport]=useState('');
    const [datecheck, setdatecheck]=useState(false);
    const [sportcheck, setsportcheck]=useState(false);
    const [date, setdate]=useState('');

    const handleSportChange=(e)=>{
        setselectedSport(e.target.value);
    }

    const handledatechange=(e)=>{
        setdate(e.target.value);
    }

    const submit=(e)=>{
        e.preventDefault();
        getdatesport(date, selectedSport);
        check(datecheck, sportcheck);
        setclick(true);
    }

    return(
        <div>
            <form className="filter-card" onSubmit={submit}>
             <div className="wrapper">
                <div className="date">
                    <label htmlFor="date">Date : </label>
                    <input type="date" onChange={handledatechange} value={date}></input>
                </div>
                <div className="date">
                    <label htmlFor="sport">Sport : </label>
                    <select id="sport" value={selectedSport}  onChange={handleSportChange} >
                    <option value="" disabled>Select a sport</option>
                        {SportsEvents.map(card => (
                            <option key={card.id} value={card.sport}>
                            {card.sport}
                            </option>
                        ))}
                    </select>
               </div>
               <div className="checkbox">
                <p>Filter events by:</p>
                <div className="check">
                <label htmlFor="date">Date</label>
                <input type="checkbox" id="date" value={datecheck} onChange={()=>setdatecheck(!datecheck)}></input>
                </div>
                <div className="check">
                <label htmlFor="sport">Sport</label>
                <input type="checkbox" id="sport" value={sportcheck} onChange={()=>setsportcheck(!sportcheck)}></input>
                </div>
               </div>
               <button type="submit" >Find Events</button>
             </div>
            </form>
           
        </div>
    )
}
