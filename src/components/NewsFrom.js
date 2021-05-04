import React, { Component } from 'react'

export default class NewsFrom extends Component {
    addButton() {
        console.log("hello world")
        this.props.addNews()
    }
    render() {
        return (
            <div>
                <button onClick={this.addButton.bind(this)}>Add</button>
            </div>
        )
    }
}
