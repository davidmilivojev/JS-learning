import React, { Component } from 'react';

class Label extends Component{
    render(){
        var labelStyle = {
            fontFamily: "arial",
            fontWeight: "bold",
            textAlign: "center"
        }
        return(
            <p style={labelStyle}>
                {this.props.color}
            </p>
        );
    }
}

export default Label;