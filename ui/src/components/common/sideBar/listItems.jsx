import React, { Component } from 'react';
import { Redirect } from 'react-router';

// material ui
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';

export class MainListItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            path: '',
            redirect: false
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(route) {
        console.log('here');
        this.setState({
            path: route,
            redirect: true
        })
    }

    render() {
        return (
            <div>
                {this.state.redirect ? <Redirect to={this.state.path} /> : ''}
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="All Users" />
                </ListItem>
                <ListItem button onClick={() => this.onClick('/allGroups')}>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="All Groups" />
                </ListItem>
            </div>
        )
    }

}

export const secondaryListItems = (
    <div>
        {/* <ListSubheader inset>Settings</ListSubheader> */}
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
    </div>
);

export const thirdListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    </div>
);