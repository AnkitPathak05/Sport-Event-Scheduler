import React, { useState, useEffect } from 'react';

// Function to extract date and time from event details
export function extractEventDateTime(event) {
    // Assumes the event object contains a 'date' and 'time' property
    const eventDate = new Date(`${event.date} ${event.time}`);
    return eventDate;
}

// Function to calculate time remaining until the event
export function calculateTimeRemaining(eventDate) {
    const now = new Date().getTime();
    const timeRemaining = eventDate.getTime() - now;

    if (timeRemaining <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

// Countdown component
function Countdown({ event }) {
    const eventDate = extractEventDateTime(event);
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(eventDate));

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(eventDate));
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(countdownInterval);
    }, [eventDate]);

    if (timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0) {
        return <div>Event has started!</div>;
    }

    return (
        <div>
            Time until event: {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
        </div>
    );
}

export default Countdown;