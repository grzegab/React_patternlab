import React from 'react'

import QuoteAtom from '../../1-atoms/05-quote'
import CiteAtom from '../../1-atoms/11-cite'

export default class QuotationMolecule extends React.Component {
    render() {
        return (
            <div className={'quotation border-left border-dark'}>
                <QuoteAtom>{this.props.children}</QuoteAtom>
                <CiteAtom>{this.props.cite}</CiteAtom>
            </div>
        );
    }
}