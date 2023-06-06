import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Events = () => {
  const [events, setEvents] = useState([]);

  const apiURL = `https://gateway.marvel.com:443/v1/public/events?limit=50&apikey=0fc969e9198cb9b9859e37e527e0cfb1`;

  const getMarvelEvents = async () => {
    try {
      const res = await axios.get(apiURL);
      const data = res.data;
      const eventsData = data?.data?.results;
      setEvents(eventsData)
      console.log(eventsData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMarvelEvents();
    document.title = "Events";
  }, [])

  return (
    <div className="events">
      <h4>Marvel Events</h4>
      <div className="events-list">
        {events.map((e) => {
          const { id, title, thumbnail, description } = e;

          return (
            <div className='event' key={id}>
              <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
              <div className='event-info'>
                <h5>Event Name: {title}</h5>
                <p>Description: {description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Events