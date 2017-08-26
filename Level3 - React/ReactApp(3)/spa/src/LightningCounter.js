import React, { Component } from 'react';

class LightningCounter extends Component{
    constructor(){
        super();
        this.state = {
            strikes: 0,
            loopCounter: 0,
            loop: "loop"
        };
    }

     componentDidMount() {

        this.timer = setInterval(() => this.tick(), 1000);
    }
     componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
        strikes: this.state.strikes + 100
    });
        if(this.state.strikes > 500){
            this.setState({
                strikes: 0,
                loopCounter: this.state.loopCounter + 1,  
                        
            });
            if(this.state.loopCounter > 1){
                this.setState({
                    loop: "loops"
                });
            }
            
            console.log('Finished counting');
        }
    }
  
    render(){
        return(
            <div>
                <h1> {this.state.strikes} </h1>
                <h2>  {this.props.name} {this.state.loop} : {this.state.loopCounter} </h2>
            </div>
        );  
    }
};

LightningCounter.defaultProps = {
    name: "App",
}


export default LightningCounter;

