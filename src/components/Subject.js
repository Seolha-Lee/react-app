import React, { Component } from "react"

class Subject extends Component{
    render(){
        return (
            <header>
                <h1><a href='/'>{this.props.title}</a></h1>
                <h2>{this.props.sub}</h2>
            </header>
        )
    }
}

export default Subject