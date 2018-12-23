import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withRoot from '../../../withRoot';
import styles from './styles';

// import material-ui
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import { MainListItems, secondaryListItems, thirdListItems } from './listItems';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    handleDrawerOpen = () => {
        this.props.handleDrawerOpen()
    };

    handleDrawerClose = () => {
        this.props.handleDrawerClose()
    };

    render() {
        const { classes } = this.props;

        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !this.props.open && classes.drawerPaperClose),
                }}
                open={this.props.open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <MainListItems />
                </List>
                <Divider />
                <List>{secondaryListItems}</List>
                <Divider />
                <List>{thirdListItems}</List>
            </Drawer>
        );
    }
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(SideBar));