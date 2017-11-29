import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../css/App.css';
import {Avatar} from './Avatar.js'
import {ListOfRepos} from './ListOfRepos.js'
//import {AvatarContainer} from './AvatarContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Avatar userName='hftor'/>
        <ListOfRepos userName='hftor'/>
      </div>
    );
  }
}

export default App;
