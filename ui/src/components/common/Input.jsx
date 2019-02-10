import React, { Component } from 'react';


export default class Input extends Component {
    render() {
        const { name, type = 'text', value, onChange, label } = this.props;
        const labelName = label.charAt(0).toUpperCase() + label.slice(1)
        return (
            <div>
                <label htmlFor={name}>{labelName}:</label>
                <input
                    onChange={onChange}
                    name={name}
                    id={name}
                    type={type}
                    value={value}/>
            </div>
        );
    }
}