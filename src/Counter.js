import React, { Component } from 'react'

export default class Counter extends Component {
    state = {

        number: 0

    }
    decrease = () => {
      var  state_number = this.state.number
        this.setState({

            number: --state_number
        })
    }

    increase = () => {
      var  state_number = this.state.number
        this.setState({

            number: ++state_number
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
