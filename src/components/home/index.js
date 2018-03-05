import React, { Component } from 'react';
import NavBar from './navBar.component';
import Dashboard from './dashboard.component';
import '../../styles/custom.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <NavBar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
