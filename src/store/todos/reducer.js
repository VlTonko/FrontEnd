import {ADD_TODO, DELETE_TODO, COMPLETED_TODO} from "./actionTypes";

const reducerTodos = (state = {todos: []}, {type, payload}) => {
    switch (type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, payload]}
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(el => el.id !== payload)}
        case COMPLETED_TODO:
            return {...state, todos: state.todos.map(el => (el.id === payload ? { ...el, completed: !el.completed } : el))}
        default:
            return state;
    }
};

export default reducerTodos;

