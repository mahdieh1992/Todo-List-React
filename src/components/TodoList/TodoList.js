import React, { useState } from 'react'
import Header from './Header'
import Todo from './Todo'

export default function TodoList() {

    const [todos, setTodos] = useState([])
    const [todoTitle, setTodoTitle] = useState('')
    const [status, setStatus] = useState('all')


    const todoTitleHandler = (event) => {

        setTodoTitle(event.target.value)

    }
    const addTodo = (event) => {
        event.preventDefault()
        let getTitle = todoTitle
        let currentTodo = [{ id: todos.length + 1, completed: false, title: getTitle }]

        setTodos(prevState=>{
            return [...prevState, ...currentTodo]
        })
    }

    const removeTodo = (todoId) => {
        let newTodo = todos.filter((todo) => {
            return todo.id != todoId
        })

        setTodos( newTodo)

    }


    const editTodo = (todoId) => {

        let currentTodo = [...todos]
        currentTodo.forEach((todo) => {

            if (todo.id == todoId) {
                todo.completed = !todo.completed
            }
        })

        setTodos(currentTodo)
    }

    const statusHandler = (event) => {
        setStatus(event.target.value)
    }

    let statusFilter = status
    return (
        <>
            <Header />
            <form>
                <input type="text" className="todo-input" maxLength="40" value={todoTitle} onChange={todoTitleHandler} />
                <button className="todo-button" type="submit" onClick={addTodo}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={statusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

            <div className="todo-container">
                <ul className="todo-list">

                    {statusFilter == 'all' && todos.map((todo) => (
                        <Todo {...todo} key={todo.id} removeTodo={removeTodo} status={editTodo} />
                    ))}

                    {statusFilter == 'completed' && todos.filter((todo) => todo.completed).map((todo) => (
                        <Todo {...todo} key={todo.id} removeTodo={removeTodo} status={editTodo} />
                    ))}

                    {statusFilter == 'uncompleted' && todos.filter((todo) => !todo.completed).map((todo) => (
                        <Todo {...todo} key={todo.id} removeTodo={removeTodo} status={editTodo} />
                    ))}
                </ul>
            </div>
        </>
    )

}
