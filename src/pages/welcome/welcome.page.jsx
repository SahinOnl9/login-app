import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.match.params.name}!
            </div>
        )
    }
}