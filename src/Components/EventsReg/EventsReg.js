import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Home/Navbar/Navbar';
import EventsRegDisplay from './EventsRegDisplay';

const EventsReg = () => {
    const [regEvent, setRegEvent] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/getRegisterEvents')
        .then(res => res.json())
        .then(data => setRegEvent(data))
    },[]);

    return (
        <div>
            <Navbar></Navbar>
        <div className="container">
            <div className="row mt-5 d-flex justify-content-between">
                {
                    regEvent.map(regEvent =><EventsRegDisplay regEvent={regEvent}></EventsRegDisplay> )
                }
                
            </div>
        </div>
        </div>

    );
};

export default EventsReg;