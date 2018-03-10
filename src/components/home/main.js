import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from '../../history'
import NavBar from './navBar.component';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role:null
        }
        this.handleLogout=this.handleLogout.bind(this);
        this.handleHome=this.handleHome.bind(this);
    }

    componentWillMount(){
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

    handleLogout(){
        debugger
        localStorage.removeItem('email');
        history.push('/');
      }

    handleHome(){
        debugger
        history.push('/app');
      }

    render() {
        return (
            <div>
                <NavBar handleLogout={this.handleLogout} role={this.state.role} handleHome={this.handleHome}/>
                {this.props.children}
            </div>
        )
    }
}
export default Home;