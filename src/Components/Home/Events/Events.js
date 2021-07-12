import React, { useEffect, useState } from 'react';
import Child from '../../../images/photos/refuseShelter.png';
import riverClean from '../../../images/photos/riverClean.png';
import cleanPark from '../../../images/photos/clearnPark.png';
import EventsDisplay from './EventsDisplay';
import './Events.css';


const Events = () => {
    const [events, setEvents] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/getEvents')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[]);

    return (
        <div className="event-section">
        <div className="container">
            <div className="row d-flex flex-wrap">
            {
                events.map(event => <EventsDisplay event={event}></EventsDisplay>)
            }
            </div>
        </div>
        </div>
    );
};

export default Events;