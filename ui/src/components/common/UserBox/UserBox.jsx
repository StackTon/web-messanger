import React from 'react';
import './userBox.css';

export default (props) => {
    return (
        <div className="user-box">
            {/* <i className="fas fa-users"></i> */}
            <i className={(props.isOpen ? '' : 'side-bar-tooltip') + ' fas fa-user' }  >
                {props.isOpen ? '' : <span className="side-bar-tooltiptext">{props.name}</span>}
            </i>
            {props.isOpen ? <div className="username">{props.name}</div> : ''}
        </div>

    )
}