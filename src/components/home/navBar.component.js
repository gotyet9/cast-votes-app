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
                    <li><a href="#" data-placement="bottom" data-toggle="tooltip" href="#" data-original-title="Stats"><i className="fa fa-bar-chart-o"></i>
                    </a>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Admin User</a>
                        <ul className="dropdown-menu">
                            <li><a href="#"><i className="fa fa-fw fa-user"></i> Edit Profile</a></li>
                            <li><a href="#"><i className="fa fa-fw fa-cog"></i> Change Password</a></li>
                            <li className="divider"></li>
                            <li><a href="#"><i className="fa fa-fw fa-power-off"></i> Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
