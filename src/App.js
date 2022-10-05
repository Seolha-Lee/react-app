import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import Nav from './components/Nav';
import Contents from './components/Contents';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      mode:'welcome',
      subject:{title:'WEB', sub:'React'},
      welcome:{title:'Welcome', desc:'Hello, React!'},
      contents:[{id:1, title:'HTML', desc:'HTML can be refered to bones.'},
      {id:2, title:'CSS', desc:'CSS can be refered to skins.'},
      {id:3, title:'JS', desc:'JavaScript can be refered to organs.'}]
    }
  }
  render(){
    console.log('App render')
    var _title, _desc = null
  if (this.state.mode === 'welcome'){
    _title = this.state.welcome.title
    _desc = this.state.welcome.desc
  } else if (this.state.mode === 'read'){
    _title = this.state.contents[0].title
    _desc = this.state.contents[0].desc
  }
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Nav cont={this.state.contents}></Nav>
        <Contents title={_title} desc={_desc}></Contents>
      </div>
    )
  }
}

export default App;
