import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Learning ReactJS</h2>
        </div>
        <p className="App-intro">
          This is my first react webSite
        </p>
        <Test age={25}/>
      </div>
    );
  }
}

export default App;