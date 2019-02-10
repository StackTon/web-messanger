import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import { getAllMessagesAction, getLatestMessageAction } from '../../actions/chatActions';

class Chat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: '',
            open: true
        }

        // this.socket = socketIOClient('https://messagernodebackend.herokuapp.com')
        this.socket = socketIOClient('http://localhost:5500');

        // bind
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
    }

    componentDidMount() {
        this.socket.on("allMessages", groupMessages => {
            this.props.getAllMessages(groupMessages);
        });

        this.socket.on("newMessage", newMessage => {
            this.props.getLatestMessage(newMessage);
            if (newMessage.from.username !== this.props.username) {
                document.getElementById("sound").play();
            }
        });
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.content.length === 0 || this.state.content.length > 100 || this.props.username === '') {
            this.props.history.push('/');
            return;
        }

        const messageData = {
            content: this.state.content,
            from: this.props.username,
            to: 'All Chat'
        };

        this.socket.emit('newMessage', messageData);

        this.setState({ content: '' });
    }

    componentWillUnmount() {
        this.socket.disconnect();
    }

    handleDrawerOpen() {
        this.setState({ open: true });
    };

    handleDrawerClose() {
        this.setState({ open: false });
    };


    render() {
        return (
            <div>
                <div component="div">
                    <audio id="sound" controls src='./sounds/case-closed.mp3' type='audio/mpeg' ref='audio_tag' className="display-none" />
                    <div>
                        {this.props.groupMessages.messages ? this.props.groupMessages.messages.map(mess => {
                            return (
                                <div key={mess._id}>
                                    <div>
                                        <div>
                                            <div>
                                                From: {mess.from.username}
                                            </div>
                                            <div>
                                                {mess.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : ''}
                    </div>
                    <form>
                        <input
                            id="component-outlined"
                            name="content"
                            value={this.state.content}
                            onChange={this.onChangeHandler}
                        />

                    </form>
                    <button variant="contained" color="primary" onClick={this.onSubmit}>
                        Send
                        </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        username: state.username,
        groupMessages: state.groupMessages
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllMessages: groupMessages => dispatch(getAllMessagesAction(groupMessages)),
        getLatestMessage: newMessage => dispatch(getLatestMessageAction(newMessage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);