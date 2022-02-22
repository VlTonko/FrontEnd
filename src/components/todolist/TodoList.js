import React from 'react';
import TodoItem from '../todoitems/TodoItem';

const TodoList = ({todos, addNotify, deleteTodo, completedTodo}) => {
    console.log(todos)

    const delTodo = async id => {
        deleteTodo(id);
        addNotify({message: `Task was delete successfully`});
    };

    const toggleTodo = id => {
        completedTodo(id);
        addNotify({message: `Task was changed successfully`});
    }

    return (
        <ul className="listItems">
            {!!todos && todos.map(todo => {
                return <TodoItem todo={todo} key={todo.id} onChange={toggleTodo} delTodo={delTodo} />;
            })}
        </ul>
    );
}

export default TodoList;
