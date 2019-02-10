import React, { Component } from 'react';
import './navBar.css';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }

        //bind
        this.sideBarClick = this.sideBarClick.bind(this);

    }

    sideBarClick() {
        this.setState({isOpen: !this.state.isOpen});
    }



    render() {
        if (this.props.isLogin) {
            return '';
        }
        return (
            <nav>
                <div className={(this.state.isOpen ? 'side-bar-open' : 'side-bar-close') + ' side-bar-icons'}>
                    <i className="fas fa-angle-double-left" onClick={this.sideBarClick}></i>
                    {/* <i className="fas fa-angle-double-right"></i> */}
                </div>
                <ul className="nav-bar">
                    <li>Create group</li>
                    <li>Add Friends</li>
                    <li>Settings</li>
                    <li><i className="nav-icon fas fa-users"></i></li>
                    <li><i className="nav-icon far fa-lightbulb"></i></li>
                    {/* <li><i className="fas fa-lightbulb"></i></li> */}
                    <li>Logout</li>
                </ul>
            </nav>
        )
    }
}