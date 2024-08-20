import React from 'react'
import './card.css'

export default function Card({id, location, teams, date, time, heading, description, sport}) {
  return (
      <div className="ag-format-container">
  <div className="ag-courses_box">
  <div className="ag-courses_item">
      <a href="/eventinfo:id" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          {heading}
        </div>
        <div className="ag-courses-item_date-box">
          <span className="ag-courses-item_date">
            {teams}
          </span>
        </div>
        <div className="ag-courses-item_date-box">
          Date:
          <span className="ag-courses-item_date">
            {date}
          </span>
        </div>
        <div className="ag-courses-item_date-box">
          Time:
          <span className="ag-courses-item_date">
            {time}
          </span>
        </div>
        <div className="ag-courses-item_date-box">
          Location:
          <span className="ag-courses-item_date">
            {location}
          </span>
        </div>
      </a>
    </div>

  </div>
</div>
   
  )
}
