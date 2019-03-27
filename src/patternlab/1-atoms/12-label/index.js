import React from 'react';

export default class LabelAtom extends React.Component {
    render() {
        return (
            <label>{this.props.children}</label>
        );
    }
}