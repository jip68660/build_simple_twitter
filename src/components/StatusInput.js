import React from 'react';

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
            <div>
                <input className="getName" value={ this.props.nameInput } name="name" onChange={ this.handleName } />
                <input className="getHandle" value={ this.props.handleInput } name="handle" onChange={ this.handleHandle } />
                <input className="getText" value={ this.props.textInput } name="text" onChange={ this.handleText } />
                <button onClick={ this.props.handleSubmit }> O </button>
            </div>
        );
    }
}

export default StatusInput;