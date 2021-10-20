import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
        </ul>
    );
};

export default TodoList;