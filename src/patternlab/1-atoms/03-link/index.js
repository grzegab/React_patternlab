import React from 'react';

export default class LinkAtom extends React.Component {
    render() {
        return (
            <a href={this.props.linkAttribute} className={'link'}>{this.props.children}</a>
        );
    }
}