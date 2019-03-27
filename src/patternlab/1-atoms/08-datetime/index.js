import React from 'react';

export default class DatetimeAtom extends React.Component {
    render() {
        return (
            <span className={'datetime'} >{this.props.children}</span>
        );
    }
}