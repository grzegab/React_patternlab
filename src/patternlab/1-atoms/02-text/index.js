import React from 'react';

export default class TextAtom extends React.Component {
    render() {
        return (
            <span className={'text'}>
                {this.props.children}
            </span>
        );
    }
}