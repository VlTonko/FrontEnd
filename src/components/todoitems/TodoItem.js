import React from 'react';
import './TodoItem.css';

export default function TodoItem({ todo, onChange, delTodo }) {
    const handleToggleTodo = () => onChange(todo.id);
    const handleDeleteTodo = () => delTodo(todo.id);

    return (
        <li className={todo.completed ? 'styleItem completed' : 'styleItem'}>
            <span>
                <input type="checkbox" onChange={handleToggleTodo} checked={todo.completed} />
                {todo.title}
            </span>
            <button className="btnDel" onClick={handleDeleteTodo}>
                &times;
            </button>
        </li>
    );
}
