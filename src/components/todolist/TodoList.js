import React from 'react';
import TodoItem from '../todoitems/TodoItem';
import {useDispatch} from "react-redux";
import {deleteNotification} from "../../store/notify/actions";


const TodoList = ({todos, showNotify, deleteTodo, completedTodo}) => {
    const dispatch = useDispatch();
    console.log(todos)

    const delTodo = async id => {
        deleteTodo(id);
        showNotify({message: `Task was delete successfully`});
    };

    const toggleTodo = id => {
        completedTodo(id);
        showNotify({message: `Task was changed successfully`});
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
