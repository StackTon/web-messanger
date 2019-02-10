import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import AllGroups from './components/AllGroups/AllGroups';
import Navar from './components/common/NavBar/NavBar';
import SideBar from './components/common/SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <>
        <Navar />
        {/* <SideBar /> */}
        <main className="App">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Chat} />
            <Route exact path="/allGroups" component={AllGroups} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;