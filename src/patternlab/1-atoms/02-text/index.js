import React from 'react';

export default class TextAtom extends React.Component {
    render() {
        return (
            <div className={'text'}>
                {this.props.children}
            </div>
        );
    }
}