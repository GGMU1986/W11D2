import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(idx) {
        this.props.removeTodo(idx);
    }

    render () {
        const receiveTodo = props.receiveTodo;
        const removeTodo = props.removeTodo;
        const todos = props.todos;

        return (
            <div>
                <ul>
                    {props.todos.map(todo => <TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} removeTodo={removeTodo}/>)}
                </ul>
                <TodoForm todos={todos} receiveTodo={receiveTodo} />
            </div>
        );
    }
};

export default TodoList;