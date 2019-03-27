import React from 'react';

export default class QuoteAtom extends React.Component {
    render() {
        return (
            <blockquote className={'quote'}>{this.props.children}</blockquote>
        );
    }
}
