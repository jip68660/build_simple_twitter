import React from 'react';
import "./StatusContent.css";

// const StatusContent = (props) => {
//     return(
//         <div className ="content">
//             <p>{ props.text }</p>
//             <button onClick={ props.handleLikes }> {props.likes} </button>
//         </div>
//     );
// };
class StatusContent extends React.Component {
    constructor(props) {
        super(props);
        this.clickLikes = this.clickLikes.bind(this);
        this.state = {
            active: false
        };
    }
    clickLikes() {
        this.setState({ active: true });
        this.props.handleLikes(this.props.text);
        
    }
    render() {    
        return(
            <div className="content">
                <p>{ this.props.text }</p>
                <div className="component">
                   <button className={ this.state.active ? "heartButton clicked" : "heartButton" } onClick={ this.clickLikes }><i className="fa fa-heart-o" aria-hidden="true"></i></button> <span>{this.props.likes}</span>
                </div>
            </div>
        );
    }
};

export default StatusContent;
