
import './App.css';
import logo from './assets/img/blabLogo.png';

import React from 'react';
class App extends React.Component{

  constructor() {
    super();
    this.state= {
      title : 'Hello from Bridge labz'
    }
  }
  

  render() {
    return (
      <div class= "flex-container"> 
        <img src = {logo}
        alt = " The BridgeLabz Logo : A bridgeLabz to employement through lab works"/>
       
      </div>
    );
  }
}

export default App;
