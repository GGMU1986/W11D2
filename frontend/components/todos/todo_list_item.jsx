import React from "react";

const TodoListItem = ({todo}) => {
    return (
        <div>
            <li key={todo.id}>{todo.title}</li>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
};

export default TodoListItem;