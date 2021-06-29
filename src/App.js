
import './App.css';
import logo from './assets/img/blabLogo.png';

import React from 'react';
class App extends React.Component{
  url = "https://www.bridgelabz.com/";
  constructor() {
    super();
    this.state= {
      title : 'Hello from Bridge labz'
    }
  }

  //onclick function
  onClick = ($event) => {
    console.log("save button is clicked ",$event);
    window.open(this.url,"_blank");
  }
  

  render() {
    return (
      <div class= "flex-container"> 
        <h1>{this.state.title}</h1>
        <img src = {logo} onClick ={this.onClick}   alt = " The BridgeLabz Logo : A bridgeLabz to employement through lab works"/>
       
      </div>
    );
  }
}

export default App;
