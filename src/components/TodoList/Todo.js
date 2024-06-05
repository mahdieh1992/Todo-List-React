import React from 'react'

export default function Todo (props){


    const remove=(todoId)=> {
        props.removeTodo(todoId)

    }
    const statusHandle=(todoId)=> {
        props.status(todoId)

    }


        let { id, title, completed } = props
        return (
            // 'completed' class for completed todos
            <div className='todo' style={{ display: 'flex' }}>
                <li className={completed ? "todo-item completed" : "todo-item"} >{title}</li>


                <button className="check-btn" onClick={()=>statusHandle(id)}>
                    <i className="fas fa-check" aria-hidden="true" ></i>
                </button>

                <button className="trash-btn" onClick={()=>remove(id)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
}