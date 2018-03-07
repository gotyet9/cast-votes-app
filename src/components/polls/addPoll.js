import React, { Component } from 'react';

class AddPoll extends Component {
    constructor(props) {
        super(props);
        this.handleOptionsChange=this.handleOptionsChange.bind(this);
      }
      handleOptionsChange(index,e){
        this.props.optionsChange(e.target.value,index)
      }
    render() {
        return (
        <div id="page-wrapper">
            <div className="container-fluid" style={{marginTop:'10px'}}>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="poll_title">Poll title:</label>
                    <div className="col-sm-10">
                        <textarea 
                        type="text" 
                        className="form-control" 
                        id="poll_title" 
                        placeholder="Enter poll details"
                        value={this.props.title}
                        onChange={this.props.titleChange}
                        >
                        </textarea>
                    </div>
                </div>
                {this.props.pollOptions.map((opt,index)=><div className="form-group" key={index}>
                    <div className="col-sm-offset-5 col-sm-4">
                        <input 
                        type="text" 
                        className="form-control" 
                        value={opt.option}
                        onChange={this.handleOptionsChange.bind(this,index)} 
                        placeholder="enter option" />
                    </div>
                </div>)}
                <div className="form-group">
                    <div className="col-sm-offset-5 col-sm-4">
                        <button type="button" className="btn btn-xs btn-primary" style={{float:'right'}} onClick={this.props.addMore}>More</button>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-success" onClick={this.props.addPoll}>Add Poll</button>&nbsp;&nbsp;
                        <button type="button" className="btn btn-warning" onClick={this.props.handleToggleNew}>Cancel</button>
                    </div>
                </div>
            </form> 
            </div>
        </div>
            
        );
    }
}

export default AddPoll;
