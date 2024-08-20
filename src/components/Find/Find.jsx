import React, { useState } from 'react'
import {Filterbox} from'../Filterbox/Filterbox'
import {Filteredevents} from'../Filteredevents/Filteredevents'
import './Find.css'


export default function Find() {

    const [datesport, setdatesport]=useState({Date: null, Sport: null});
    const [Check, setcheck]=useState({datecheck: false, sportcheck: false});
    const [Click, setclick]=useState(false);

    const getdatesport=(Date, Sport)=>{
        setdatesport({Date, Sport});
    }
    const check=(datecheck, sportcheck)=>{
      setcheck({datecheck, sportcheck});
    }
    const click=()=>{
      setclick(true);
    }
  return (
    
    <div className='main'>
      <br></br>
      <h1>Filter Events</h1>
      <br></br>
      <div className='find-container'>
      <Filterbox getdatesport={getdatesport} check={check} />
      </div>
      <br></br>
      <div className='filtered-container'>
      <Filteredevents datesport={datesport} Check={Check} /> 
      </div>
      
     
    </div>
  )
}
