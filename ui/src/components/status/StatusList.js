import React from 'react';
import Status from './Status';

class StatusList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // READ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        const userPosts = this.props.userPosts;
        const statuses = userPosts.map((post, index) => {
            return (
                <Status key={ index } name={ post.name } handle={ post.handle } text={ post.text } timestamp={ post.timestamp} likes={ post.likes } handleLikes={ this.props.handleLikes } />
            );
        });
        // console.log(userPosts);
        // JSX syntax 
        return(
            <div>
                { statuses }
            </div>
        );
    };
}

export default StatusList;