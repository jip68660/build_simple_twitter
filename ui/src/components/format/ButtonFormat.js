import React from 'react';

class ButtonFormat extends React.Component {
    render() {
        return (
            <button
              className={ this.props.className }
              onClick={ this.props.handleSubmit }
            >
            <a href={ this.props.hyperlink }>
            { this.props.buttonValue }
            </a>
            </button>
        );
    }
}
export default ButtonFormat;