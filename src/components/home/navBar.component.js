import React, { Component } from 'react';

class NavBar extends Component {
  
    render() {
        return (
            <div className="row">
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" onClick={this.props.handleHome}>
                        <img src="http://placehold.it/200x50&text=Cast-Your-Votes" alt="LOGO" />
                    </a>
                </div>
                <ul className="nav navbar-right top-nav">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown">Welcome {this.props.role==1?'Admin':'Standard'} User</a>
                    </li>
                    <li>
                        <a onClick={this.props.handleLogout} style={{cursor:'pointer'}}  className="dropdown-toggle" data-toggle="dropdown">Log Out</a>
                    </li>
                </ul>
            </nav>
            </div>
        );
    }
}

export default NavBar;
