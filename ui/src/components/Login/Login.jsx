import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewNicknameAction } from '../../actions/authActions';
import { Redirect } from 'react-router';
import Input from '../common/Input';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            loggedIn: false,
        }

        // bind
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitNickname = this.onSubmitNickname.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitNickname(e) {
        e.preventDefault();

        // TODO
        if (this.state.username.length === 0) {
            return;
        }

        this.props.addNewNickname(this.state.username);

        this.setState({ loggedIn: true });
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/" />;
        }
        return (
            <div className="login-wrapper" >

                <form className="login-form">
                    <h2>Log in</h2>
                    <Input label="username" name="username" onChange={this.onChangeHandler} value={this.state.username} />
                    <div
                        className="login-button"
                        onClick={this.onSubmitNickname}
                    >Sign in</div>
                </form>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatch)(Login);