import React, { Component } from 'react';

class NavBar extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="http://cijulenlinea.ucr.ac.cr/dev-users/">
                        <img src="http://placehold.it/200x50&text=LOGO" alt="LOGO" />
                    </a>
                </div>
                <ul className="nav navbar-right top-nav">
                    <li>
                        <a onClick={this.props.handleLogout} style={{cursor:'pointer'}}  className="dropdown-toggle" data-toggle="dropdown">Log Out</a>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown">Welcome {'Admin'} User</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
