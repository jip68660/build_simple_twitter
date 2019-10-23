import React from 'react';
import ButtonFormat from './format/ButtonFormat'

const AuthButton = (props) => {
    return props.check ? (
      <p> 
        <ButtonFormat 
          className={ "submitButton login" } 
          handleSubmit={ () => {} } 
          buttonValue={ "Login" }
          hyperlink={ "/login" }
        /> 
      </p>
    ):(
      <p>
         <ButtonFormat 
          className={ "submitButton signout" } 
          handleSubmit={ () => {} } 
          buttonValue={ "Signout" }
          hyperlink={ "/login" }
        /> 
      </p>
    )
};

export default AuthButton;