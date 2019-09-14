import React from 'react';
import Status from './Status';
import { arrayExpression } from '@babel/types';

class StatusList extends React.Component {
    render() {
        // READ: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        const userPosts = this.props.userPosts;
        const statuses = userPosts.map((post) => {
            return (
                <Status name= { post.name } text = { post.text } />
            );
        });

        // JSX syntax 
        return(
            <div>
                { statuses }
            </div>
        );
    };
}

export default StatusList;