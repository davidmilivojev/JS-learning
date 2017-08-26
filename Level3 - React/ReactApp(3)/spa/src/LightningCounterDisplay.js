import React, { Component } from 'react';
import LightningCounter from './LightningCounter';

class LightningCounterDisplay extends Component{
    render(){

         var divStyle = {
            // width: "100%",
            // maxWidth: "400px",
            textAlign: "center",
            margin: "0 auto",
            backgroundColor: "black",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#00cc66",
          };

        return(
            <div style={divStyle}>
                <LightningCounter/>
            </div>
        );
    }
};

export default LightningCounterDisplay;