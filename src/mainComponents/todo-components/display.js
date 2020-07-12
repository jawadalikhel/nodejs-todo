import React from 'react'

const Display = (props) =>{
    let allTodos = props.todosDB.map((todo) =>{
        return(
            <div key={todo._id}>
                {(todo.title) ? <h1>- {todo.title}</h1> : null}
                {(todo.note) ? <p>{todo.note}</p> : null}
                {(todo.title) ? <button onClick={props.handleDelete.bind(null, todo._id)}>Delete</button> : null}
            </div>
        )
    })

    return(
        <div>
            your todos

            {allTodos}
        </div>
    )
}

export default Display;
