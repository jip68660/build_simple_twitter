import React from 'react';
import InputFormat from './InputFormat';
import ButtonFormat from './ButtonFormat';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.handleHandle = this.handleHandle.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleHandle(event) {
        this.props.handleChange("handle", event);
    }

    handlePassword(event) {
        this.props.handleChange("password", event);
    }

    render() {
        return(
            <div className="inputTemplate">
                <div className="topContent">
                    <InputFormat
                        className={ "getHandle" }
                        placeholder={ "Handle" }
                        value={ this.props.handle }
                        name={ "userHandle" }
                        handleChange={ this.handleHandle }
                    />
                    <InputFormat 
                        className={ "getPassword" } 
                        placeholder={ "Password" } 
                        value={ this.props.password } 
                        name={ "userPassword" } 
                        handleChange={ this.handlePassword }
                    />
                </div>
                <ButtonFormat 
                    className={ "submitButton save" } 
                    handleSubmit={ this.props.handleLogin } 
                    buttonValue={ "Login" }
                    hyperlink={"/"}
                /> 
                <a href="/signup">Signup</a>
            </div>
        );
     
    }
}

export default Login;
