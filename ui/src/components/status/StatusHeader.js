import React from 'react';
import "./StatusHeader.css";

const StatusHeader = (props) => {
    return(
        <div className='header'>
            <div className="name">
                { props.name }  
            </div> 
            <div className="handle">
               @{ props.handle } · 
            </div>
            <div className="timeStamp">
                { props.timestamp }
            </div>
        </div>
    )
};

export default StatusHeader;