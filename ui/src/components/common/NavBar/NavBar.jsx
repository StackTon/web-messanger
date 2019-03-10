import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewNicknameAction } from '../../../actions/authActions';
import { Redirect } from 'react-router';
import './navBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
            redirectToLogin: false
        }

        //bind
        this.sideBarClick = this.sideBarClick.bind(this);
        this.logout = this.logout.bind(this);
    }

    sideBarClick() {
        this.props.sideBarArrowClicked();
    }

    logout() {
        this.props.addNewNickname('');
        this.setState({redirectToLogin: true});
    }

    render() {
        if (this.state.redirectToLogin) {
            this.setState({redirectToLogin: false});
            return <Redirect to="/login" />;
        }
        if (this.props.username.length > 0) {
            return (
                <nav>
                    <div className={(this.props.isOpen ? 'side-bar-open' : 'side-bar-close') + ' side-bar-icons'}>
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
                        <li onClick={this.logout}>Logout</li>
                    </ul>
                </nav>
            )
        } else {
            return ''
        }
        
    }
}

function mapStateToProps(state) {
    return {
        username: state.username
    };
}

function mapDispatch(dispatch) {
    return {
        addNewNickname: username => dispatch(addNewNicknameAction(username))
    };
}

export default connect(mapStateToProps, mapDispatch)(NavBar);