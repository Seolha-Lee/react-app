import React, { Component } from "react"

class Nav extends Component {
    shouldComponentUpdate(updatedprops, updatedstate){
        console.log('Navigation render(shouldComponentUpdate)'
        , updatedprops.data
        , this.props.data
        )
        if (this.props.data !== updatedprops.data){
            return true
        }
        return false
    }
    render(){
        console.log('Navigation render')
        var lists = []
        var data = this.props.cont
        var i = 0
        while(i < data.length){
            lists.push(<li key={data[i].id}>
                <a href={"/posts/"+data[i].id}
                    data-id={data[i].id}
                    onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id)

                }.bind(this)}>{data[i].title}</a>
            </li>)
            i += 1
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