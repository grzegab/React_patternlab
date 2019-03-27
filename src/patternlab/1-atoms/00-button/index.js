import React from 'react';

export default class ButtonAtom extends React.Component {
    render() {
        return (
            <button className={`button button-${this.props.buttonType}`}>
                {this.props.children}
            </button>
        );
    }
}