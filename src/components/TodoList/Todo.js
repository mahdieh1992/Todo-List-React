import React, { Component } from 'react'

export default class Todo extends Component {


    remove(todoId) {
        this.props.removeTodo(todoId)

    }
    statusHandle(todoId) {
        this.props.status(todoId)

    }

    render() {
        let { id, title, completed } = this.props
        return (
            // 'completed' class for completed todos
            <div className='todo' style={{ display: 'flex' }}>
                     {completed ? <li className="todo-item completed" >{title}</li> : <li className="todo-item" >{title}</li>}


                <button className="check-btn" onClick={this.statusHandle.bind(this, id)}>
                    <i className="fas fa-check" aria-hidden="true" ></i>
                </button>

                <button className="trash-btn" onClick={this.remove.bind(this, id)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}