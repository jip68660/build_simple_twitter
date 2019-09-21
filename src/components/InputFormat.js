import React from 'react';

class InputFormat extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input
              className={ this.props.className }
              placeholder={ this.props.placeholder } 
              value={ this.props.value } 
              name={ this.props.name } 
              onChange={ this.props.handleChange }
            />
        );
    }
}

export default InputFormat;