import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewNicknameAction } from '../../actions/authActions';
import withRoot from '../../withRoot';
import PropTypes from 'prop-types';
import styles from './styles';
import { Redirect } from 'react-router';

// import material-ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';



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
        const { classes } = this.props;

        return (
            <main className={classes.main}>
                {this.state.loggedIn ? <Redirect to="/chat" /> : ''}
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" name="username" onChange={this.onChangeHandler} value={this.state.username} autoFocus />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.onSubmitNickname}
                        >
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

Chat.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapDispatch(dispatch) {
    return {
        addNewNickname: username => dispatch(addNewNicknameAction(username))
    };
}

export default connect(null, mapDispatch)(withRoot(withStyles(styles)(Chat)));