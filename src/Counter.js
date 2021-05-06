import React, { Component } from 'react'

export default class Counter extends Component {
    state = {

        number: 0

    }
    decrease = () => {
        this.setState({

            number: --this.state.number
        })
    }

    increase = () => {
        this.setState({

            number: ++this.state.number
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.decrease}>Azalt</button>
                <button onClick={this.increase}>arttır</button>
            </div>
        )
    }
}
