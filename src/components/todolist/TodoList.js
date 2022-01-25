import React from 'react';
import TodoItem from '../todoitems/TodoItem';

const TodoList = props => (
    <ul className="listItems">
        {props.todos.map(todo => {
            return <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} delTodo={props.delTodo} />;
        })}
    </ul>
);

export default TodoList;
