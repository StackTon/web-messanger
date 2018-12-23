import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import { getAllMessagesAction, getLatestMessageAction } from '../../actions/chatActions';
import NavBar from '../common/sideBar/NavBar';
import SideBar from '../common/sideBar/SideBar';
import styles from '../common/sideBar/styles';
import PropTypes from 'prop-types';
import withRoot from '../../withRoot';

// material ui
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <NavBar title="All chat" open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} handleDrawerClose={this.handleDrawerClose} />
                <SideBar open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} handleDrawerClose={this.handleDrawerClose} />

                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Typography component="div" className={classes.chartContainer}>
                        <audio id="sound" controls src='./sounds/case-closed.mp3' type='audio/mpeg' ref='audio_tag' className="display-none" />
                        <div className="messages-area">
                            {this.props.groupMessages.messages ? this.props.groupMessages.messages.map(mess => {
                                return (
                                    <div key={mess._id} className={classes.messagePlace}>
                                        <Paper className={(this.props.username === mess.from.username ? classes['my-message'] : classes['other-message']) + ' ' + classes.message}>
                                            <div>
                                                <div>
                                                    From: {mess.from.username}
                                                </div>
                                                <div>
                                                    {mess.content}
                                                </div>
                                            </div>
                                        </Paper>
                                    </div>
                                )
                            }) : ''}
                        </div>
                        <FormControl className={classes.formControl} variant="outlined">
                            <OutlinedInput
                                id="component-outlined"
                                name="content"
                                value={this.state.content}
                                onChange={this.onChangeHandler}
                                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                                multiline={false}
                                className={classes.formInput}
                            />

                        </FormControl>
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.onSubmit}>
                            Send
                        </Button>
                    </Typography>
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

Chat.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRoot(withStyles(styles)(Chat)));