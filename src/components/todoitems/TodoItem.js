import React from 'react';
import './TodoItem.css';
import {StButtonDelete, StInputCheck, StTask} from "../styled";


export default function TodoItem({ todo, onChange, delTodo }) {
    const handleToggleTodo = () => onChange(todo.id);
    const handleDeleteTodo = () => delTodo(todo.id);

    return (
        <StTask className={todo.completed ? 'styleItem completed' : 'styleItem'}>
                <StInputCheck type="checkbox" onChange={handleToggleTodo} checked={todo.completed} />
                {todo.title}
            <StButtonDelete onClick={handleDeleteTodo}>
                &times;
            </StButtonDelete>
        </StTask>
    );
}
