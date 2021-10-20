import React from "react";

<<<<<<< HEAD
const TodoListItem = (props) => {
=======
const TodoListItem = ({todo}) => {
>>>>>>> d1e2a33a834fded38b7a8f0bea6f6102a2cf6ff2
    return (
        <div>
            <li key={todo.id}>{todo.title}</li>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
};

export default TodoListItem;