import React, { Component } from "react";

class Contents extends Component {
    render(){
        return(
            <article>
                <h3>{this.props.title}</h3>
                {this.props.cont}
            </article>
        )
    }
}

export default Contents