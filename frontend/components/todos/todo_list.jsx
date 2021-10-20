import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form'


const TodoList = (props) => {
    const receiveTodo = props.receiveTodo;
    const todos = props.todos;

    return (
        <div>
            <ul>
                {props.todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
            </ul>
            <TodoForm todos={todos} receiveTodo={receiveTodo} />
        </div>
    );
};

export default TodoList;