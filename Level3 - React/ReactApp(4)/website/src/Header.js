import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png';

class Header extends Component{
    render(){
        return( 
            <div>         
                <div className="header">
                    <div className="wrapper">
                        <img src={logo} alt="logo" className="logo"/>
                        <ul className="menu">
                            <li>Home</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>JavaScript</li>
                            <li>EcmaScript</li>
                        </ul>  
                    </div>
                </div>              
               
           </div>                
        );
    }
}

export default Header;