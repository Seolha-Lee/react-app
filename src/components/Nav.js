import React, { Component } from "react";

class Nav extends Component {
    render(){
        console.log('Navigation render')
        var lists = []
        var data = this.props.cont
        var i = 0
        while(i < data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
            i += 1;
        }
        return(
            <article>
                <h3>Web</h3>
                <nav>
                    <ul>
                        {lists}
                    </ul>
                </nav>
            </article>
        )
    }
}

export default Nav