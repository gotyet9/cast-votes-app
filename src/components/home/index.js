import React, { Component } from 'react';
import NavBar from './navBar.component';
import Dashboard from './dashboard.component';
import AddPoll from '../polls/addPoll';
import '../../styles/custom.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addFlag:false,
      pollTitle:'',
      polls:[],
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
    let storedPolls = JSON.parse(localStorage.getItem("polls"));
    this.setState({polls:storedPolls})
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
            addFlag={this.state.addFlag}/>
            <Dashboard 
            pollsData={this.state.polls}
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
      </div>
    );
  }
}

export default App;
