import React, { Component } from 'react';
class Dashboard extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <div className="container-fluid" style={{ marginTop: '10px' }}>
                    {this.props.pollsData.length?<div className="row" id="main" >
                    {this.props.pollsData.map((poll,index)=><div key={index} className="col-sm-12 col-md-12 well" id="content">
                            <h2>{poll.title?poll.title:'-'}</h2>
                            <span 
                            onClick={(e) => this.props.pollDetails(e,index)}
                            className="glyphicon glyphicon-share-alt pull-right" 
                            style={{fontSize:'30px',paddingLeft:'20px',cursor:'pointer'}}></span>
                            {this.props.role==1?<span
                            onClick={(e) => this.props.handleDeletePoll(e,index)}
                            className="glyphicon glyphicon-remove-circle pull-right" 
                            style={{fontSize:'30px',cursor:'pointer'}}></span>:null}
                        </div>)}
                    </div>:<div><h1>No polls available at the moment!</h1></div>}
                </div>
            </div>
        );
    }
}

export default Dashboard;
