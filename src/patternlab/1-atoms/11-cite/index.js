import React from 'react';

export default class CiteAtom extends React.Component {
    render() {
        return (
            <cite>{this.props.children}</cite>
        );
    }
}