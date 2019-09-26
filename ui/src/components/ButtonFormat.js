import React from 'react';

class ButtonFormat extends React.Component {
    render() {
        return (
            <button
              className={ this.props.className }
              onClick={ this.props.handleSubmit }
            >
            { this.props.buttonValue }
            </button>
        );
    }
}

export default ButtonFormat;