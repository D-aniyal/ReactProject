import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Useritem from "./components/user/Useritem";

class App extends Component {

  render() {
    //const number = [0,1,2,3];

return (
      <div className="App">
      
      <Navbar />
       <Useritem />
    </div>
 
    );
  
}
}

export default App;
