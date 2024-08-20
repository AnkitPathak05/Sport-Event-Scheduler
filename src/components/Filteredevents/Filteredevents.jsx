import React, { useState } from 'react'
import { SportsEvents } from '../../database/Eventdata'
import Card from '../../components/Card/Card'
import './filteredevents.css'

export function Filteredevents({datesport, Check}) {
  const {Date, Sport}=datesport;
  const {datecheck, sportcheck}=Check;
  const [submit, setsubmit]=useState(false);
  

  const filteredEvents = SportsEvents.filter(sport => {
    if (datecheck && sportcheck){
      if(Date === sport.date && Sport === sport.sport) {
        return true;
        
      }
    } 
    else if (datecheck && sportcheck===false) {
      if(Date === sport.date)
      return true;
    }
    else if (sportcheck && datecheck===false) {
      if(Sport === sport.sport)
      return true;
    }
    return false;
  });

  return (
    <div className='filtercontainer'>
      {filteredEvents.length > 0  ? (
        filteredEvents.map(sport => (
          <Card
            key={sport.id}
            id={sport.id}
            heading={sport.heading}
            teams={sport.teams}
            location={sport.location}
            date={sport.date}
            time={sport.time}
            description={sport.description}
          />
        ))
      ) : (
        <div className="no-events"><h2>No events found</h2></div>
      )}
    </div>
  );
}