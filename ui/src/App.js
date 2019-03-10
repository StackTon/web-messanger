import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Navar from './components/common/NavBar/NavBar';
import SideBar from './components/common/SideBar/SideBar';
import CreateGroup from './components/CreateGroup/CreateGroup';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }

        //bind
        this.sideBarArrowClicked = this.sideBarArrowClicked.bind(this);
    }

    sideBarArrowClicked() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <>
                <Navar sideBarArrowClicked={this.sideBarArrowClicked} isOpen={this.state.isOpen} />
                <div className="wrapper">
                    <SideBar sideBarArrowClicked={this.sideBarArrowClicked} isOpen={this.state.isOpen} />
                    <main>
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/" component={Chat} />
                            <Route exact path="/createGroup" component={CreateGroup} />
                        </Switch>
                    </main>
                </div>
            </>
        );
    }
}

export default App;