const RECEIVE_TODOS = "RECEIVE_TODOS";
const RECEIVE_TODO = "RECEIVE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const receiveTodos = todos => ({
    type: RECEIVE_TODOS,
    todos
});

const receiveTodo = todo => ({
    type: RECEIVE_TODO,
    todo
});

const removeTodo = todo => ({
    type: REMOVE_TODO,
    todo
})

export { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, receiveTodo };