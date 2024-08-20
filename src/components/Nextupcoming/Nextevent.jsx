import React from "react";
  
export function getNextUpcomingEvent(events) {
  
      const now = new Date();
  

      const upcomingEvents = events
          .filter(event => new Date(event.date + ' ' + event.time)-now > -1800000)
          .sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
      return upcomingEvents[0];
    }

