import React, { Component } from 'react';
import NavBar from './navBar.component';
import Dashboard from './dashboard.component';
import AddPoll from '../polls/addPoll';
import { ToastContainer, toast } from 'react-toastify';
import {checkEmailAuth} from '../../utils/auth';
import '../../styles/custom.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addFlag:false,
      pollTitle:'',
      polls:[],
      role:null,
      pollOptions:[
        {votes:0,option:''},
        {votes:0,option:''}
    ]
    }
    this.handleLogout=this.handleLogout.bind(this);
    this.handleToggleNew=this.handleToggleNew.bind(this);
    this.handleMore=this.handleMore.bind(this);
    this.handleTitleChange=this.handleTitleChange.bind(this);
    this.handleOptionsChange=this.handleOptionsChange.bind(this);
    this.handleAddPoll=this.handleAddPoll.bind(this);
  }

  componentWillMount(){
    debugger
    if(checkEmailAuth()){
      let storedPolls = JSON.parse(localStorage.getItem("polls"));
      this.setState({polls:storedPolls?storedPolls:[]})
      let role=localStorage.getItem('role')
      if(role==1){
        this.setState({role:1})
      }
      else if(role==2){
        this.setState({role:2})
      }
      else{
        toast.error("Some error occured, please try again!") 
      }
    }
    else{
      toast.error("Please login to view polls")  
      setTimeout(function(){ this.props.history.push('/')}.bind(this), 1000);   
    }
  }

  handleLogout(){
    localStorage.removeItem('email');
    this.props.history.push('/');
  }

  handleToggleNew(){
    this.setState({
      addFlag:!this.state.addFlag,
      pollOptions:[
        {votes:0,option:''},
        {votes:0,option:''}
    ],
    pollTitle:''
    })
  }

  handleMore(){
    let data={
      votes:0,
      option:''
    }
    let current=this.state.pollOptions.slice()
    current.push(data)
    this.setState({pollOptions:current})
  }

  handleTitleChange(e){
    this.setState({pollTitle:e.target.value})
  }

  handleOptionsChange(value,index){
    debugger
    let current=this.state.pollOptions.slice()
    current[index].option=value
    this.setState({pollOptions:current})
  }

  handleAddPoll(){
    debugger
    let data={
      title:this.state.pollTitle,
      options:this.state.pollOptions
    }
    let current=this.state.polls.slice()
    current.push(data)
    localStorage.setItem("polls", JSON.stringify(current));
    this.setState({
      polls:current,
      addFlag:!this.state.addFlag,
      pollOptions:[
        {votes:0,option:''},
        {votes:0,option:''}
    ],
    pollTitle:''
    })
  }

  render() {
    return (
      <div className="row">
          <div className={this.state.addFlag?"col-lg-6 col-md-6 col-sm-6":"col-lg-12 col-md-12 col-sm-12"}>
            <NavBar 
            handleLogout={this.handleLogout} 
            handleToggleNew={this.handleToggleNew} 
            addFlag={this.state.addFlag}
            role={this.state.role}
            />
            <Dashboard 
            pollsData={this.state.polls.length?this.state.polls:[]}
            role={this.state.role}
            />
          </div>
          {this.state.addFlag?<div className="col-lg-6 col-md-6 col-sm-6">
              <AddPoll 
              handleToggleNew={this.handleToggleNew} 
              pollOptions={this.state.pollOptions} 
              addMore={this.handleMore}
              title={this.state.pollTitle}
              titleChange={this.handleTitleChange}
              optionsChange={this.handleOptionsChange}
              addPoll={this.handleAddPoll}
              />
          </div>:null}
          <ToastContainer />
      </div>
    );
  }
}

export default App;
