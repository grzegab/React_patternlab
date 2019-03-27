import React from 'react';

export default class ImageAtom extends React.Component {
    render() {
        const src = this.props.src ? this.props.src : './dummy.jpg';
        return (
            <img className={'image'} src={src} alt={'some dummy img'}/>
        );
    }
}