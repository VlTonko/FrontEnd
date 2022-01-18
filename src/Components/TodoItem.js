import React from 'react';
import './TodoItem.css';

export default function TodoItem({ todo, index, onChange }) {
    console.log('todo', todo);
    return (
        <li className="styleItem">
            <span>
                <input
                    type="checkbox"
                    onChange={() => {
                        onChange(todo.id);
                    }}
                ></input>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button>&times;</button>
        </li>
    );
}
