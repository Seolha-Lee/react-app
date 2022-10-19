import React, { Component } from "react"

class Subject extends Component{
    render(){
        return (
            <header>
            <h1><a href='/' onClick={function(e){
                e.preventDefault();
                this.props.onChangePage();
                this.setState({mode:'welcome'});
            }.bind(this)}>{this.props.title}</a></h1>
            <h2>{this.props.sub}</h2>
        </header>
        )
    }
}

export default Subject