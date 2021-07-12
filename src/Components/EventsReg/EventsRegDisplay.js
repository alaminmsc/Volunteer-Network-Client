import React from 'react';
import imgOne from '../../images/photos/cleanWater.png';
import './event.css';

const EventsRegDisplay = (props) => {
    const {title, date} = props.regEvent;

    const handleCancel= () => {
            document.getElementById('event').style.display='none';
            console.log('Click')
    }

    return (
            <div className="col-md-5 d-flex eventReg my-2" id="event">
            <div>
                <img src={imgOne} alt="" width="180px" height="180px"></img>
            </div>
            <div className="mx-4">
                <h3>{title}</h3>
                <h6>{date}</h6>
                <br></br>
                <button className="btn btn-secondary ms-5" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default EventsRegDisplay;