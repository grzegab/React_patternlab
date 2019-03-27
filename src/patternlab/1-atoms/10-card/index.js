import React from 'react';

export default class CardAtom extends React.Component {
    render() {
        const title = this.props.title ? <h3 className={'card-title'}>{this.props.title}</h3> : '';

        return (
            <div className={'card'}>
                <div className={'card-body'}>
                    {title}
                    <p className={'card-text'}>{this.props.children}</p>
                </div>
            </div>
        );
    }
}