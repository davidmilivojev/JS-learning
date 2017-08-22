import React, { Component } from 'react';
import './test.css';


class Test extends Component{
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.updateDate = this.updateDate.bind(this);
        this.interval = setInterval(this.updateDate, 1000);
    }  
    updateDate() {
        this.setState({
        date: new Date().toLocaleTimeString(),
        });
    }
  
    makeOlder(){
       this.setState({
            count: this.state.count + 1
        });

        if(this.state.count > 5){
            console.log(`clicks: ${this.state.count}`);
            alert('count more than 5');
        }
    }
    render(){
        return(
            <div className="container">
                <div className="wrapper">
                    <div className="colz">
                        <h1> hello world</h1>
                        <h2>Time: {this.state.date}.</h2>
                        <h1>Clicked: <span>{this.state.count} </span></h1>
                        <button onClick={()=> this.makeOlder()} className="block">Click</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;