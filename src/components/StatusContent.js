import React from 'react';
import "./StatusContent.css";

const StatusContent = (props) => {
    return(
        <div className ="content">
            <p>{ props.text }</p>
            <button onClick={ props.handleLikes}> {props.likes} </button>
        </div>
    );
};

export default StatusContent;
