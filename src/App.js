import React, { Component } from 'react';
import './App.css';



class App extends Component {
  render() {
const name = "daniyal" ;

//const many = () =>  "fani";

const loading = true;

 
    
return (
      <div className="App">
    { loading ? <h2> Loading...</h2> : <h1>Hello {name} </h1> } 
    </div>
 
    );
  
}
}

export default App;
