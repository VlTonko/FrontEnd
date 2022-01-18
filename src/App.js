import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';

let todos = [
    { id: 1, completed: true, title: 'learn CSS' },
    { id: 1, completed: true, title: 'learn JS' },
    { id: 1, completed: false, title: 'learn REACT' },
];

function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
}

function App() {
    return (
        <div className="wrapper">
            <h1>Holla!</h1>
            <TodoList todos={todos} onToggle={toggleTodo} />
        </div>
    );
}

export default App;
