import React from 'react';

const StatusHeader = (props) => {
    return(
        <div className='header'>
            <div className="name">
                { props.name }
            </div>
        </div>
    )
};

export default StatusHeader;