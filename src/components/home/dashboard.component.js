import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="row" id="main" >
                        <div className="col-sm-12 col-md-12 well" id="content">
                            <h1>Here is your poll count!!!</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
