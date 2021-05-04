import React, { Component } from 'react'

export default class NewsFrom extends Component {
    constructor(props) {
        super(props)  
    }
    
    addButton=() =>{
        console.log("hello world")
        this.props.addNews()
    }
    render() {
        return (
            <div>
                <button onClick={this.addButton}>Add</button>
            </div>
        )
    }
}
