import React from 'react';

export default class HeadingAtom extends React.Component {
    render() {
        return (
            <div className={'heading'}>{this.props.children}</div>
        );
    }
}

export class HeadingDropdownAtom extends React.Component {
    render() {
        return (
            <div className={'dropdown-header'}>{this.props.children}</div>
        );
    }
}