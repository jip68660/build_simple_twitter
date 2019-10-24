import React from 'react';

class TextFormat extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <textarea
              className={ this.props.className }
              placeholder={ this.props.placeholder } 
              value={ this.props.value } 
              name={ this.props.name } 
              onChange={ this.props.handleChange }
            />
        );
    }
}
export default TextFormat;