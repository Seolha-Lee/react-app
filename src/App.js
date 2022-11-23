import './App.css';
import React, { Component } from 'react';
import Subject from './components/Subject';
import Nav from './components/Nav';
import Create from './components/Create';
import DataManager from './components/DataManager';
import Read from './components/Read';

class App extends Component{
  constructor(props){
    super(props)
    this.id_max = 3;
    this.state = { /* Rendered */
      mode:`create`,
      cont_id_sel: 1,
      subject:{title:`WEB`, sub:`React`},
      welcome:{title:`Welcome`, contents:`Welcome page`},
      posts:[
      {id:1, title:`1st`, contents:`Contents of post id:1`},
      {id:2, title:`2nd`, contents:`Contents of post id:2`},
      {id:3, title:`3rd`, contents:`Contents of post id:3`}]
    }
  }
  render(){
    /* No-reload page reaction */
    console.log(`App render`)
    var _title, _contents, _article = null
    if (this.state.mode === `welcome`){
      _title = this.state.welcome.title
      _contents = this.state.welcome.contents
      _article = <Read title={_title} contents={_contents}></Read>
    } else if (this.state.mode === `read`){
      let i = 0
      while (i < this.state.posts.length){
        let data = this.state.posts[i]
        if(data.id === this.state.cont_id_sel){
          _title = data.title
          _contents = data.contents
          break
        }
        i += 1
      }
      _article = <Read title={_title} contents={_contents}></Read>
    } else if (this.state.mode === `create`){
      _article = <Create onSubmit={
        function(_title, _contents){
          this.id_max += 1
          let _posts = this.state.posts.concat(
            {id: this.id_max, title: _title, contents: _contents}
          )
          this.setState({posts: _posts})
          console.log(_title, _contents)
        }.bind(this)
      }></Create>
    }
    /*  */

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
          this.setState({
            mode: _mode
          })
        }.bind(this)}></DataManager>

        {_article}
      </div>
    )
  }
}

export default App;
