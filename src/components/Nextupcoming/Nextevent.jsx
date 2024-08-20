import React from "react";
  
export function getNextUpcomingEvent(events) {
      // Get the current date and time
      const now = new Date();
  
      // Filter out past events and sort by date and time
      const upcomingEvents = events
          .filter(event => new Date(event.date + ' ' + event.time)-now > -1800000)
          .sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
      return upcomingEvents[0];
    }

