import React, { Component } from "react"

class Create extends Component {
    render(){
        return(
            <article>
                <h2>Create</h2>
                <form action="/create_ongoing" method="post" onSubmit={
                    function(e){
                        e.preventDefault()
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.contents.value
                        )
                    }.bind(this)
                }>
                    <p><input type="text" name="title" placeholder="title"></input></p>
                    <p><textarea name="contents" placeholder="contents"></textarea></p>
                    <p><input type="submit"></input></p>
                </form>
            </article>
        )
    }
}

export default Create