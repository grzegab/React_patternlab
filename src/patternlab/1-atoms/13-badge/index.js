import React from 'react';
import { Badge } from 'react-bootstrap'

export default class BadgeAtom extends React.Component {
    render() {
        const variant = this.props.variant ? this.props.variant : 'primary';

        return (
            <Badge variant={variant}>{this.props.children}</Badge>
        );
    }
}