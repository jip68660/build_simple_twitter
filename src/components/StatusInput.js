import React from 'react';
import "./StatusInput.css";

class StatusInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleName = this.handleName.bind(this);
        this.handleHandle = this.handleHandle.bind(this);
        this.handleText = this.handleText.bind(this);
    }

    handleName(event) {
        this.props.handleChange("name", event);
    }
    handleHandle(event) {
        this.props.handleChange("handle", event);
    }
    handleText(event) {
        this.props.handleChange("text", event);
    }

    render() {
        return(
            <div className="inputTemplate">
                <div className="topContent">
                    <input className="getName" placeholder="Name" value={ this.props.nameInput } name="name" onChange={ this.handleName } />
                    <input className="getHandle" placeholder="Handle" value={ this.props.handleInput } name="handle" onChange={ this.handleHandle } />
                </div>
                <div className="bottomContent">
                    <textarea className="getText" placeholder="What's happening?" value={ this.props.textInput } name="text" onChange={ this.handleText } onKeyPress={ this.props.handleKeypress}/>
                    <button className="submitButton" onClick={ this.props.handleSubmit }> TWEET </button>
                </div>
            </div>
        );
    }
}

export default StatusInput;