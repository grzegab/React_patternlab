import React from 'react';

import HeaderAtom from '../../1-atoms/04-heading';
import TextAtom from '../../1-atoms/02-text';

export default class TextMolecule extends React.Component {
    render() {
        return (
            <div className={'textMolecule'}>
                <HeaderAtom>{this.props.heading}</HeaderAtom>
                <TextAtom>{this.props.children}</TextAtom>
            </div>
        );
    }
}