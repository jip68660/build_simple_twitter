import React from 'react';
import InputFormat from './format/InputFormat';
import ButtonFormat from './format/ButtonFormat';
import useHistory from 'use-history';
class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.handleName = this.handleName.bind(this);
        this.handleHandle = this.handleHandle.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleName(event) {
        this.props.handleChange("name", event);
    }
    handleHandle(event) {
        this.props.handleChange("handle", event);
    }
    handlePassword(event) {
        this.props.handleChange("password", event);
    }
    handleSubmit(event) {
        this.props.handleSignup(event);
    }
    
    render() {
        return(
            <div className="inputTemplate">
                <div className="topContent">
                    <InputFormat 
                        className={ "getName" } 
                        placeholder={ "Name" } 
                        value={ this.props.name } 
                        name={ "name" } 
                        handleChange={ this.handleName }
                    />
                    <InputFormat
                        className={ "getHandle" }
                        placeholder={ "Handle" }
                        value={ this.props.handle }
                        name={ "handle" }
                        handleChange={ this.handleHandle }
                    />
                    <InputFormat
                        className={ "getPassword" }
                        placeholder={ "Password" }
                        value={ this.props.password }
                        name={ "password" }
                        handleChange={ this.handlePassword }
                    />

                </div>
                <ButtonFormat 
                    className={ "submitButton save" } 
                    handleSubmit={ this.handleSubmit } 
                    buttonValue={ "Save" }
                    hyperlink= { "/" }

                /> 
            </div>
        );
     
    }
}

export default Signup;