import React from 'react';
import {Link} from "react-router-dom";

const EventsDisplay = (props) => {
    const {name,image,date,_id} = props.event;
    return (
        
            <div className="col-md-4 col-sm-6 col-xl-3 text-center mb-4">
                <Link to={`/register/${name}`}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top" />
                    <div className="card-body" style={{backgroundColor:'brown', marginTop:'-10px'}}>
                    <h5 className="card-text text-white">{name}</h5>
                    </div>
                </div>
                </Link>
            </div>
        
    );
};

export default EventsDisplay;