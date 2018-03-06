import React, { Component } from 'react';
import NavBar from './navBar.component';
import Dashboard from './dashboard.component';
import '../../styles/custom.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.handleLogout=this.handleLogout.bind(this);
  }

  handleLogout(){
    debugger
    localStorage.clear();
    this.props.history.push('/');
  }

  render() {
    return (
      <div id="wrapper">
        <NavBar handleLogout={this.handleLogout}/>
        <Dashboard />
      </div>
    );
  }
}

export default App;
