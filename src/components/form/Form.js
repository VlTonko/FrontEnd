import React, {useContext, useState} from 'react';
import './Form.css';
import {addTodo} from "../../store/todos/actions";
import {useDispatch} from "react-redux";
import {NotificationContext} from "../../NotificationContent";

const Form = () => {
    const dispatch = useDispatch();
    const {showNotification} = useContext(NotificationContext);
    const [title, setTitle] = useState("");
    const handleChangeInput = e => setTitle( e.target.value );

    const addTolist = async task => {
        const newTodo = { id: Date.now(), title: task, completed: false };
        try {
            showNotification({type: "success", message: `Task ${task} was added successfully`})
            dispatch(addTodo(newTodo))
        } catch (error) {
            showNotification({type: "fail", message: `Task was not added`})
            return false;
        }
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
