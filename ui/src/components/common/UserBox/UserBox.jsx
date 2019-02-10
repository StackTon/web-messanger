import React from 'react';
import './userBox.css';

export default (props) => {
    return (
        <div>
            {/* <i className="fas fa-users"></i> */}
            <i className="fas fa-user"></i>
            <div>{props.name}</div>
        </div>

    )
}