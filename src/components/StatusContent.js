import React from 'react';

const StatusContent = (props) => {
    return(
        <div className ="context">
            <p>{ props.text } <span onClick={ props.handleLikes }> Likes: { props.likes }</span></p>
        </div>
    );
};

export default StatusContent;
