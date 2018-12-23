import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Register from './components/Register/Register';
import AllGroups from './components/AllGroups/AllGroups';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/allGroups" component={AllGroups} />
        </Switch>
      </div>
    );
  }
}

export default App;
