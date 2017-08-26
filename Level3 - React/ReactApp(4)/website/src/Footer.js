import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

    render(){
        return(
                <div className="footer">
                     <div className="wrapper">                       
                            <h3 className="clock">{this.state.date.toLocaleTimeString()}</h3>                    
                     </div>
                </div>
        );
    }
}

export default Footer;