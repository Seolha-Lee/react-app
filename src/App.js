import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class Subject extends Component{
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        <h2>{this.props.sub}</h2>
      </header>
    )
  }
}

class Contents extends Component {
  render(){
    return(
      <article>
        <h3>HELP</h3>
        I don't wanna be a slave
      </article>
    )
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject title='Web' sub='React'></Subject>
        <Contents></Contents>
        blyat
      </div>
    )
  }
}

export default App;
