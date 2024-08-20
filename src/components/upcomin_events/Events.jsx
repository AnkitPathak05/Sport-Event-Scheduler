import React from 'react'
import Card from '../Card/Card'
import { SportsEvents } from '../../database/Eventdata'
import './Events.css'

export default function Events() {


  return (
    <> 
      <div className='EventList'>
        <div className='allevents'>
          {SportsEvents.map(card => (
          <Card 
            id={card.id} heading={card.heading} teams={card.teams} location={card.location} date={card.date} time={card.time} description={card.description}
          />
        ))}
        </div>
      </div>

    </>
  
  )
}

