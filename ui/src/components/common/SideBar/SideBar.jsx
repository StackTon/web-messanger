import React, { Component } from 'react';
import UserBox from '../UserBox/UserBox';
import './sideBar.css';

let users = ['Pesho', 'Gosho', 'Marti', 'Mitko', 'Maria', 'Penka']


export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className={(this.props.isOpen ? 'side-bar-open' : 'side-bar-close') + ' side-bar'}>
                {users.map((name) => {
                    return <UserBox name={name} isOpen={this.props.isOpen} />
                })}
            </aside>
        )
    }
}