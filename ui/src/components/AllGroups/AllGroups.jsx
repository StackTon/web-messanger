import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import { getAllMessagesAction, getLatestMessageAction } from '../../actions/chatActions';

class AllGroups extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true
        }
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
                <main>
                    <h1>KIT</h1>
                </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllGroups);