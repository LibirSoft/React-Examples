import React, { Component } from 'react'
import "../css/Newsitem.css"
export default class NewItem extends Component {
    render() {
        // this props coming from new component
        const { title, description } = this.props;
        return (
            <div>
                <h1 className="title">{title}</h1>
                <p>
                    {description}
                </p>
            </div>
        )
    }
}
