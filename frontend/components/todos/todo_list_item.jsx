import React from "react";

const TodoListItem = (props) => {
    
    return (
        <ul>
            {props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    )
}

export default TodoListItem;