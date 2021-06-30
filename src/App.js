
import './App.css';
import logo from './assets/img/blabLogo.jpg';

import React from 'react';
class App extends React.Component{
  url = "https://www.bridgelabz.com/";
  constructor() {
    super();
    this.state= {
    userName: ''
    }
  }

  //onclick function
  onClick = ($event) => {
    console.log("save button is clicked ",$event);
    window.open(this.url,"_blank");
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    this.setState({userName:event.target.value})
  }
  

  render() {
    return (
      <>
      <div> 
        <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img src = {logo} onClick ={this.onClick}   alt = " The BridgeLabz Logo : A bridgeLabz to employement through lab works"/>
      </div>
      <div className="text-box">
           <input onChange ={this.onNameChange} />
      </div>
      </>
    );
  }
}

export default App;
