import React, { Component } from 'react';
import './Content.css';
import profile from './profileImg.png';
import logo from './logo.png';

class Content extends Component{
    constructor(){
        super();
        //this.handleClick = this.handleClick.bind(this)
        this.state = {
            url: profile,
        }
    }

    handleClick(){      
        this.setState({
            url: logo,
        });

         if(this.state.url === logo){
              this.setState({
                    url: profile,
                });
         }else{
             this.setState({
                    url: logo,
                });
         }
        
         console.log('test')
    }


    render(){
        return(
             <div className="wrapper">
                    <div id="home-id"className="content">
                         <p>
                             Home Lorem Ipsum is simply dummy text of the printing and typesetting 
                             industry. Lorem Ipsum has been the industry's standard dummy text 
                             ever since the 1500s, when an unknown printer took a galley of type
                             and scrambled it to make a type specimen book. It has survived not 
                             only five centuries, but also the leap into electronic typesetting, 
                             remaining essentially unchanged. It was popularised in the 1960s with 
                             the release of Letraset sheets containing Lorem Ipsum passages, and more 
                             recently with desktop publishing software like Aldus PageMaker including
                             versions of Lorem Ipsum.
                         </p>
                         <div className="profile">
                            <img src={this.state.url} className="profile-img" alt="" onClick={() => this.handleClick()}/>
                         </div>
                         <div className="profile">
                            <img src={profile} className="profile-img" alt=""/>
                         </div>
                         <div className="profile">
                            <img src={profile} className="profile-img" alt=""/>
                         </div>
                         <div className="profile">
                            <img src={profile} className="profile-img" alt=""/>
                         </div>
                    </div>

                    <div id="react-id"className="content">
                         <p>
                             React Lorem Ipsum is simply dummy text of the printing and typesetting 
                             industry. Lorem Ipsum has been the industry's standard dummy text 
                             ever since the 1500s, when an unknown printer took a galley of type
                             and scrambled it to make a type specimen book. It has survived not 
                             only five centuries, but also the leap into electronic typesetting, 
                             remaining essentially unchanged. It was popularised in the 1960s with 
                             the release of Letraset sheets containing Lorem Ipsum passages, and more 
                             recently with desktop publishing software like Aldus PageMaker including
                             versions of Lorem Ipsum.
                         </p>                       
                    </div>
                     <div id="redux-id"className="content">
                         <p>
                             Redux Lorem Ipsum is simply dummy text of the printing and typesetting 
                             industry. Lorem Ipsum has been the industry's standard dummy text 
                             ever since the 1500s, when an unknown printer took a galley of type
                             and scrambled it to make a type specimen book. It has survived not 
                             only five centuries, but also the leap into electronic typesetting, 
                             remaining essentially unchanged. It was popularised in the 1960s with 
                             the release of Letraset sheets containing Lorem Ipsum passages, and more 
                             recently with desktop publishing software like Aldus PageMaker including
                             versions of Lorem Ipsum.
                         </p>                       
                    </div>
                     <div id="js-id"className="content">
                         <p>
                             javascript Lorem Ipsum is simply dummy text of the printing and typesetting 
                             industry. Lorem Ipsum has been the industry's standard dummy text 
                             ever since the 1500s, when an unknown printer took a galley of type
                             and scrambled it to make a type specimen book. It has survived not 
                             only five centuries, but also the leap into electronic typesetting, 
                             remaining essentially unchanged. It was popularised in the 1960s with 
                             the release of Letraset sheets containing Lorem Ipsum passages, and more 
                             recently with desktop publishing software like Aldus PageMaker including
                             versions of Lorem Ipsum.
                         </p>                       
                    </div>
             </div>
        );
    }
}



export default Content;