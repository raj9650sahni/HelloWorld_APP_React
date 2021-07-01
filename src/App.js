
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
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');

    this.setState({userName:event.target.value})
    if (nameRegex.test(event.target.value)) {
      this.setState({nameError:''})
    } else{
      this.setState({nameError: 'Name is Incorrect'})
    }
  }
  

  render() {
    return (
      <div className='app-main'>
      <div className= "main"> 
      <div>
        <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img src = {logo} onClick ={this.onClick}   alt = " The BridgeLabz Logo : A bridgeLabz to employement through lab works"/>
      </div>
      <div className="text-box">
           <input onChange ={this.onNameChange} />
           <span className='error-output' >{this.state.nameError}</span>
      </div>
      <div>
        At BridgeLabz we're a community of 
        <ul>
          <li> Technologists </li>
          <li> Thinkers </li>
          <li> Builders </li>
        </ul>
        Working together to keep the tech Employability of Engineers Alive......
        <br />
        <br />
        To Know about us ,visit <a href = "https://www.bridgelabz.com/" rel= "noreferrer" target="_blank">BridgeLabz</a> to learn even more about our mission
        i.e <b>Employability to All</b>
      </div>
      </div>
      </div>

    );
  }
}

export default App;
