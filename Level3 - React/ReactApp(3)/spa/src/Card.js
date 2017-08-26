import React, { Component } from 'react';
import Square from './Square';
import Label from './Label';

class Card extends Component{
    render(){
        var cardStyle = {
            height: "200px",
            width: "150px",
            backgroundColor: "#FFF",
            border: "1px solid black",
            margin: "0 auto"
        };
        return(
            <div style={cardStyle}>
                <Square color="#00cc66"/>
                <Label color="#000" />
            </div>
        );
    }
};


export default Card;