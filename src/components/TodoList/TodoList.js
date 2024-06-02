import React, { Component } from 'react'
import Header from './Header'
import Todo from './Todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: 'all'
        }

        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.todoTitleHandler = this.todoTitleHandler.bind(this)
        this.statusHandler = this.statusHandler.bind(this)


    }


    todoTitleHandler(event) {

        this.setState({
            todoTitle: event.target.value
        })

    }
    addTodo(event) {
        event.preventDefault()
        let getTitle = this.state.todoTitle
        let currentTodo = [{ id: this.state.todos.length + 1, completed: false, title: getTitle }]
        this.setState((prevState) => {
            return { todos: [...prevState.todos, ...currentTodo] }
        })

    }

    removeTodo(todoId) {
        let newTodo = this.state.todos.filter((todo) => {
            return todo.id != todoId
        })
        this.setState({
            todos: newTodo
        })

    }


    editTodo(todoId) {
        let getIndex = this.state.todos.findIndex((todo) => {
            return todo.id == todoId
        })
        let currentTodo = [...this.state.todos]
        let completed = currentTodo[getIndex].completed
        currentTodo[getIndex].completed = !completed
        this.setState({
            todos: currentTodo
        })

    }

    statusHandler(event) {
        this.setState({
            status: event.target.value
        })
            
    }
    render() {
        let statusFilter=this.state.status
        return (
            <>
                <Header />
                <form>
                    <input type="text" className="todo-input" maxLength="40" value={this.state.todoTitle} onChange={this.todoTitleHandler} />
                    <button className="todo-button" type="submit" onClick={this.addTodo}>
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select name="todos" className="filter-todo" onChange={this.statusHandler}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">

                      {statusFilter=='all' && this.state.todos.map((todo) => (
                            <Todo {...todo} key={todo.id} removeTodo={this.removeTodo} status={this.editTodo} />
                        ))}

                        {statusFilter=='completed' && this.state.todos.filter((todo)=>{return todo.completed}).map((todo)=>(
                              <Todo {...todo} key={todo.id} removeTodo={this.removeTodo} status={this.editTodo} />
                        ))}

                        {statusFilter=='uncompleted' && this.state.todos.filter((todo)=>{return todo.completed==false}).map((todo)=>(
                                                    <Todo {...todo} key={todo.id} removeTodo={this.removeTodo} status={this.editTodo} />
                                                ))}
                    </ul>
                </div>
            </>
        )
    }
}
