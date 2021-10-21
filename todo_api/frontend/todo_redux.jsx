import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';
import { allTodos } from './reducers/selectors';
// import { fetchAllTodos } from './util/todo_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();
    const fetchAllTodos = () => {
        $.ajax({
            method: 'GET',
            url: '/api/todos'
        }).then(
            todos => console.log(todos),
            error => console.log(error)
        );
    }
    window.store = store;
    window.fetchAllTodos = fetchAllTodos;
    window.allTodos = allTodos;
    ReactDOM.render(<Root store={store} />, root);
});