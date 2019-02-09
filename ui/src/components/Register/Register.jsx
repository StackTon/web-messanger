import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewNicknameAction } from '../../actions/authActions';
import { Redirect } from 'react-router';

class Chat extends Component {
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
        return (
            <main>
                {this.state.loggedIn ? <Redirect to="/chat" /> : ''}
                <div>
                    <div>
                        <div />
                    </div>
                    <div component="h1" variant="h5">
                        Sign in
                    </div>
                    <form>
                        <form>
                            <laber htmlFor="username">Username</laber>
                            <input id="username" name="username" onChange={this.onChangeHandler} value={this.state.username} autoFocus />
                        </form>
                        <button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            
                            onClick={this.onSubmitNickname}
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </main>
        )
    }
}

function mapDispatch(dispatch) {
    return {
        addNewNickname: username => dispatch(addNewNicknameAction(username))
    };
}

export default connect(null, mapDispatch)(Chat);