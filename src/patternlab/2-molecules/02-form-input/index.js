import React from 'react'

import LabelAtom from '../../1-atoms/12-label/index'
import InputAtom from '../../1-atoms/09-input/index'


export default class QuotationMolecule extends React.Component {
    render() {
        return (
            <div className={'formInput'}>
                <LabelAtom>{this.props.children}</LabelAtom>
                <InputAtom/>
            </div>
        );
    }
}