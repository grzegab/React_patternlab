import React from 'react';
import { Button } from 'react-bootstrap';

export default class ButtonAtom extends React.Component {
    render() {
        return (
            <Button className={`button-${this.props.buttonType}`}>{this.props.children}</Button>
            // <button className={`button button-${this.props.buttonType}`}>
            //
            // </button>
        );
    }
}