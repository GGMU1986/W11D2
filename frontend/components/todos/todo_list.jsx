import React from 'react';
import { allTodos } from '../../reducers/selectors';
import TodoListItem from './todo_list_item';

const TodoList = (props) => {
    const todos = props.todos
    return (
        <div>
            <TodoListItem todos={todos}/>
        </div>
    )
        
}

export default TodoList;