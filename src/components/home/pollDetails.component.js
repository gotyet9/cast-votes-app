import React, { Component } from 'react';
import VotesChart from './votesChart.component';
class PollDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            options:[],
            polls:[]
        }
        this.handleVoteUp=this.handleVoteUp.bind(this)
    }
    componentWillMount(){
        debugger
        let title=this.props.match.params.title
        let actTitle=title.replace(/\-/g,' ')
        let storedPolls = JSON.parse(localStorage.getItem("polls"))
        let index=storedPolls.findIndex(a => a.title == actTitle)
        if(index>=0){
            this.setState({
                polls:storedPolls,
                title:storedPolls[index].title,
                options:storedPolls[index].options,
                pollIndex:index
                })
            }
    }

    handleVoteUp(index){
        debugger
        let currentPolls=this.state.polls.slice()
        let currentOptions=this.state.options.slice()
        currentOptions[index].votes=currentOptions[index].votes + 1
        this.setState({options:currentOptions})
        let pollData={
            title:this.state.title,
            options:currentOptions
        }
        currentPolls.splice(this.state.pollIndex,1,pollData)
        localStorage.setItem("polls", JSON.stringify(currentPolls));
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-6 col-xs-6">
                    <div className="well" style={{height:'500px'}}>
                    <h1>Cast your votes...</h1>
                        <p style={{fontStyle:'italic',fontFamily:'monospace',fontSize:'35px', textAlign:'center'}}>{this.state.title}</p>
                        <div className="vertical-options">
                        {this.state.options.map((opt,index)=><div onClick={this.handleVoteUp.bind(this,index)} key={index}>{opt.option}<span style={{float:'right'}}>{opt.votes}</span></div>)}
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xs-6">
                        <VotesChart title={this.state.title} pollOptions={this.state.options}/>
                </div>
            </div>
        );
    }
}

export default PollDetails;
