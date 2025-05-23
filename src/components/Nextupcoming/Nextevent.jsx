export function getNextUpcomingEvent(events) {
  if (!Array.isArray(events)) return null;

  const now = new Date();
  const THIRTY_MINUTES_MS = 30 * 60 * 1000;

  const upcomingEvents = events
    .filter(event => {
      if (!event.date || !event.time) return false;
      const eventDateTime = new Date(`${event.date}T${event.time}`);
      return eventDateTime - now > -THIRTY_MINUTES_MS;
    })
    .sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateA - dateB;
    });

  // Return the next event or a fallback
  return (
    upcomingEvents[0] || {
      id: 0,
      heading: "No Upcoming Event",
      teams: "",
      location: "",
      date: "2025-10-18",
      time: "10:00",
      sport: "",
      description: "",
    }
  );
}
