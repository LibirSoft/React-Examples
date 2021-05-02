import React, { Component } from 'react'
import NewItem from "./NewItem"

export default class News extends Component {
    render() {
        return (
            <div>
               <NewItem/>
               <NewItem/>
               <NewItem/>
            </div>
        )
    }
}
