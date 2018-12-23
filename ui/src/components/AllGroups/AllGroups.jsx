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


import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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
        const { classes } = this.props; 

        return (
            <div className={classes.root}>
                <NavBar title="All chat" open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} handleDrawerClose={this.handleDrawerClose} />
                <SideBar open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} handleDrawerClose={this.handleDrawerClose} />

                <main className={classes.content}>
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

AllGroups.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRoot(withStyles(styles)(AllGroups)));