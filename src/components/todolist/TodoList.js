import React from 'react';
import TodoItem from '../todoitems/TodoItem';
import {useDispatch, useSelector} from "react-redux";
import {selectorTodos} from "../../store/todos/selectors";
import {completedTodo, deleteTodo} from "../../store/todos/actions";
import {deleteNotification, showNotification} from "../../store/notify/actions";


const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectorTodos);
    console.log(todos)

    const delTodo = async id => {
        dispatch(deleteTodo(id))
        dispatch(showNotification({message: `Task was delete successfully`}));
        setTimeout(clearNotify, 2000);
    };

    const toggleTodo = id => {
        dispatch(completedTodo(id));
        dispatch(showNotification({message: `Task was changed successfully`}));
        setTimeout(clearNotify, 2000);
    }

    const clearNotify = () => {
        dispatch(deleteNotification({message: ``}));
    };

    return (
        <ul className="listItems">
            {todos.map(todo => {
                return <TodoItem todo={todo} key={todo.id} onChange={toggleTodo} delTodo={delTodo} />;
            })}
        </ul>
    );
}

export default TodoList;
