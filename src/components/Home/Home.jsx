import React, { useEffect } from 'react'
import Card from '../Card/Card';
import './Home.css'
import { getNextUpcomingEvent } from '../Nextupcoming/Nextevent';
import Countdown from '../Nextupcoming/Countdown';
import { SportsEvents } from '../../database/Eventdata';
import { NavLink } from 'react-router-dom';

export default function Home() {

  const nextevent=getNextUpcomingEvent(SportsEvents);

  return (
    <div className='home'>
      <div className='hupper'>
        <div id='heading'>
        <h1 id='hmain'>Welcome to <span>SPARDHA 2024</span></h1>
        </div>
        <br/>
        <div className='info'>
        <p id="event-info">
  Get ready for an electrifying experience! <strong>SPARDHA 2024</strong>, the prestigious annual sports fest of <strong>IIT BHU</strong>, is set to take place from <strong>October 18th to 20th, 2024</strong>. Join us for three thrilling days of intense competition, camaraderie, and unforgettable moments!
</p>

        </div>
        
      </div>
      
      
      <div className='upcoming'>
        <h1>Next Event Starts in</h1>
        <h1 id='countdown'><Countdown event={nextevent} /></h1>
        <br></br>
        <h1>Event Details</h1>
        <div className='hcard'>
        <Card  id={nextevent.id} heading={nextevent.heading} teams={nextevent.teams} location={nextevent.location} date={nextevent.date} time={nextevent.time} description={nextevent.description}></Card>
        </div>
        <p className='view'><NavLink to='/upcoming'>View All Events</NavLink></p>
      </div>

      <div className='upcoming'>
        <h1>Past Events</h1>
        <div className='past'>
        {SportsEvents[0].date<Date?<h1>No Recent Events</h1>:<h1>Past Events</h1>}
        </div>
       
      </div>

    </div>

  )
} 
