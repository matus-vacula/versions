const reducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_VERSION_SUCCESSFUL':
            return state;
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        default:
            return state;
    }
};

export default reducer;