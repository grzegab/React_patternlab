import React from 'react';

export default class InputAtom extends React.Component {
    render() {
        const type = this.props.type ? this.props.type : 'text';
        const placeholder = this.props.placeholder ? this.props.placeholder : 'Placeholder';

        return (
            <input type={type} className={''} placeholder={placeholder} defaultValue={''} >
                {this.props.children}
            </input>
        );
    }
}