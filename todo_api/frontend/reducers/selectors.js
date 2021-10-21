export const allTodos = (state) => {
    const arr = Object.values(state.todos);
    return arr;
}