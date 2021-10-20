import React from 'react';
import { allTodos } from '../../reducers/selectors';

const TodoList = (props) => {
    return (
        <div>
            <ul>
                {props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </div>
    )
        
}

export default TodoList;