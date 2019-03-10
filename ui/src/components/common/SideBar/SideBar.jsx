import React, { Component } from 'react';
import UserBox from '../UserBox/UserBox';
import { connect } from 'react-redux';
import './sideBar.css';

let users = ['Pesho', 'Gosho', 'Marti', 'Mitko', 'Maria', 'Penka']


class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.username.length > 0) {
            return (
                <aside className={(this.props.isOpen ? 'side-bar-open' : 'side-bar-close') + ' side-bar ' + (this.props.username ? '' : 'hide')}>
                    {users.map((name) => {
                        return <UserBox name={name} isOpen={this.props.isOpen} />
                    })}
                </aside>
            )
        } else {
            return '';
        }

    }
}

function mapStateToProps(state) {
    return {
        username: state.username
    };
}

export default connect(mapStateToProps, null)(SideBar);