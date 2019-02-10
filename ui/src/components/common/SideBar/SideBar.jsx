import React, { Component } from 'react';
import UserBox from '../UserBox/UserBox';
import './sideBar.css';

let users = ['Pesho', 'Gosho', 'Marti', 'Mitko', 'Maria', 'Penka']


export default class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true
        }
    }

    render() {
        return (
            <aside className="side-bar">
                {users.map((name) => {
                    return <UserBox name={name} />
                })}


                <div>
                    <i className="fas fa-angle-double-left"></i>
                    {/* <i className="fas fa-angle-double-right"></i> */}
                </div>
            </aside>
        )
    }
}