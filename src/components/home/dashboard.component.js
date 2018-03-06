import React, { Component } from 'react';
class Dashboard extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <div className="container-fluid" style={{ marginTop: '10px' }}>
                    <div className="row" id="main" >
                    {this.props.pollsData.map((poll,index)=><div key={index} className="col-sm-12 col-md-12 well" id="content">
                            <h2>{poll.title?poll.title:'-'}</h2>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
