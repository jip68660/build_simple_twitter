import React from "react";
import StatusHeader from './StatusHeader';
import StatusContent  from './StatusContent';
import "./Status.css";

const Status = (props) => {
    return (
        <div className="statusTemplate">
            <StatusHeader name={ props.name } handle={ props.handle } timestamp = { props.timestamp }/> 
            <StatusContent text={ props.text } likes={ props.likes } handleLikes = { props.handleLikes }/>
        </div>
    );
};

export default Status;