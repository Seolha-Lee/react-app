import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import Nav from './components/Nav';
import Create from './components/Create';
import DataManager from './components/DataManager';
import Read from './components/Read';
import Update from './components/Update';

class App extends Component{
  constructor(props){
    super(props)
    this.id_max = 3;
    this.state = { /* Rendered */
      mode:`welcome`,
      cont_id_sel: 1,
      subject:{title:`WEB`, sub:`React`},
      welcome:{title:`Welcome`, contents:`Welcome page`},
      posts:[
      {id:1, title:`1st`, contents:`Contents of post id:1`},
      {id:2, title:`2nd`, contents:`Contents of post id:2`},
      {id:3, title:`3rd`, contents:`Contents of post id:3`}]
    }
  }
  readContents(){
    let i = 0
    while (i < this.state.posts.length){
      let data = this.state.posts[i]
      if(data.id === this.state.cont_id_sel){
        return data
      }
      i += 1
    }
  }
  getContents(){
    /* No-reload page reaction */
    console.log(`App render`)
    var _title, _contents, _article = null
    if (this.state.mode === `welcome`){
      _title = this.state.welcome.title
      _contents = this.state.welcome.contents
      _article = <Read title={_title} contents={_contents}></Read>
    }
    
    else if (this.state.mode === `read`){
      _contents = this.readContents()
      _article = <Read title={_contents.title} contents={_contents.contents}></Read>
    }
    
    else if (this.state.mode === `create`){
      _article = <Create onSubmit={
        function(_title, _contents){
          this.id_max++
          let _posts = this.state.posts.concat(
            {id: this.id_max, title: _title, contents: _contents}
          )
          this.setState({posts: _posts})
          console.log(_title, _contents)
        }.bind(this)
      }></Create>
    }
    
    else if (this.state.mode === `update`){
      _contents = this.readContents()
      _article = <Update data={_contents} onSubmit={
        function(_id, _title, _contents){
          let _posts = Array.from(this.state.posts)
          let i = 0
          while(i < _posts.length){
            if(_posts[i].id === _id) {
              _posts[i] = {id: _id, title: _title, contents: _contents}
              break
            }
            i++
          }
          this.setState({posts: _posts, mode: `read`})
          console.log(_title, _contents)
        }.bind(this)
      }></Update>
    }
    return _article
  }
  render(){
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:`welcome`});
        }.bind(this)}
        ></Subject>
        <Nav onChangePage={
          function(id){
            this.setState({
              mode:`read`,
              cont_id_sel: Number(id)
            })
          }.bind(this)
        }
          cont={this.state.posts}></Nav>
        
        <DataManager onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm()){
              let _posts = Array.from(this.state.posts)
              let i = 0
              while(i < _posts.length){
                if(_posts[i].id === this.state.cont_id_sel){
                  _posts.splice(i, 1)
                  break
                }
                i++
              }
              this.setState({mode: 'welcome', posts: _posts})
            }
          } else {

          }
          this.setState({
            mode: _mode
          })
        }.bind(this)}></DataManager>

        {this.getContents()}
      </div>
    )
  }
}

export default App;
