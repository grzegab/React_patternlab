import React from 'react';

export default class Color extends React.Component {

    render() {
        return (
            <div className={`color-example color-example-${this.props.colorName}`}>
                <span className={`desc`}> {this.props.colorName} </span>
            </div>
        );
    }
}