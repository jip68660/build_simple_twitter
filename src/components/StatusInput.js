import React from 'react';
import InputFormat from './InputFormat';
import TextFormat from './TextFormat';
import ButtonFormat from './ButtonFormat';
import "./StatusInput.css";

class StatusInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleText = this.handleText.bind(this);
    }
    handleText(event) {
        this.props.handleChange("text", event);
    }
    render() {
        return(
            <div className="inputTemplate">
                <div className="bottomContent">
                    <TextFormat 
                        className={ "getText" } 
                        placeholder={ "What's happening?" } 
                        value={ this.props.textInput } 
                        name={ "text" } 
                        handleChange={ this.handleText } />
                    <ButtonFormat 
                        className={ "submitButton" } 
                        handleSubmit={ this.props.handleSubmit } 
                        buttonValue={ "Tweet"} /> 
                </div>
            </div>
        );
    }
}

export default StatusInput;