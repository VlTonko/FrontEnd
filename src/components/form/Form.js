import React, {useContext, useState} from 'react';
import './Form.css';
import {addTodo} from "../../store/todos/actions";
import {useDispatch} from "react-redux";
import {NotificationContext} from "../../NotificationContent";
import {addNotification, deleteNotification} from "../../store/notify/actions";

const Form = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const handleChangeInput = e => setTitle( e.target.value );

    const clearNotify = () => {
        dispatch(deleteNotification({message: ``}));
    };

    const addTolist = async task => {
        const newTodo = { id: Date.now(), title: task, completed: false };
        dispatch(addTodo(newTodo))
        dispatch(addNotification({message: `Task ${task} was added successfully`}))
        setTimeout(clearNotify, 2000);
    };

    const handleSubmit = () => {
        if (!!title) {
            addTolist(title);
        }
        setTitle( '' );
    };

        return (
            <div className="inputField">
                <input
                    className="inputText"
                    onChange={handleChangeInput}
                    placeholder="Agregar tarea"
                    value={title}
                />
                <button onClick={handleSubmit} className="add">Agregar</button>
            </div>
        );
}

export default Form;
