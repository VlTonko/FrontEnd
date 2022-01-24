import React from 'react';
import TodoItem from '../todoitems/TodoItem';

export default function TodoList(props) {
    return (
        <ul className="listItems">
            {props.todos.map(todo => {
                return <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} delTodo={props.delTodo} />;
            })}
        </ul>
    );
}
