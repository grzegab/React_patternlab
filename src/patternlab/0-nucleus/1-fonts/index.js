import React from 'react';

export default class FontNucleus extends React.Component {

    render() {
        return (
            <div className={`font-example font-example-${this.props.fontName}`}>
                {this.props.children}
                <span className={`desc`}> {this.props.fontName} </span>
            </div>
        );
    }
}