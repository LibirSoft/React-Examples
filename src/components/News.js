import React, { Component } from 'react'
import NewItem from "./NewItem"

export default class News extends Component {
    render() {
        const title = "react"
        const description = " Consectetur mollit cupidatat dolor aliquip pariatur labore."
        return (
            <div>
                
                <NewItem title={title} description={description} />

            </div>
        )
    }
}
