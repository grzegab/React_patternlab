import React from 'react';

export default class ListAtom extends React.Component {
    render() {
        return (
            <ul className={'list'}>
                {/*array map*/}
                {this.props.elements.map((element, index) => <li key={index}>{element}</li>)}
            </ul>
        );
    }
}