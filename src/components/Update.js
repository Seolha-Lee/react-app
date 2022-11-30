import React, { Component } from "react"

class Update extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            contents: this.props.data.contents
        }
    }
    inputformhandler(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        console.log(this.props.data)
        console.log(`Update`)
        return(
            <article>
                <h2>Update</h2>
                <form action="/update_ongoing" method="post" onSubmit={
                    function(e){
                        e.preventDefault()
                        this.props.onSubmit(
                            this.state.title,
                            this.state.contents,
                            this.state.id
                        )
                    }.bind(this)
                }>
                    <p><input type="hidden" name="id" value={this.state.id}></input></p>
                    <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={
                        this.inputformhandler.bind(this)
                    }></input></p>
                    <p><textarea name="contents" placeholder="contents" value={this.state.contents} onChange={
                        this.inputformhandler.bind(this)
                    }></textarea></p>
                    <p><input type="submit"></input></p>
                </form>
            </article>
        )
    }
}

export default Update