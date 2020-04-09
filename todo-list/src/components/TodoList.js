import React, { Component } from 'react'
import Item from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                Hello From TodoList
                <Item />
            </div>
        )
    }
}
