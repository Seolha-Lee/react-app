import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class Subject extends Component{
  render(){
    return (
      <header>
        <h1>REACT</h1>
      </header>
    )
  }
}

class Contents extends Component {
  render(){
    return(
      <article>
        <h2>HELP</h2>
        I don't wanna be a slave
      </article>
    )
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject></Subject>
        <Contents></Contents>
        blyat
      </div>
    )
  }
}

export default App;
