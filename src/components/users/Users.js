import React, { Component } from 'react'

export default class Users extends Component {
    state = {
        users: []
    }
    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <div>{user}</div>
                ))}
            </div>
        )
    }
}
