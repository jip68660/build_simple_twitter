import React from "react";
import StatusHeader from './StatusHeader';
import StatusContent  from './StatusContent';

const Status = (props) => {
    return (
        <div>
            <StatusHeader name={ props.name } handle={ props.handle } timestamp = { props.timestamp }/> 
            <StatusContent text={ props.text } />
        </div>
    );
};

export default Status;