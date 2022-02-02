import './Form.css';
import {StInputText, StButton, StButtonAdd} from "../styled";
import React, { useState } from 'react';
import App from '../../App'


export function Form ({addTolist}) {
    const [title, setTitle] = useState('');

    const handleChangeInput = e => setTitle( e.target.value );

    const addTask = () => addTolist(title);

    const handleSubmit = () => {
        if (title) {
            addTask(title);
        }
        setTitle(title, '' );
    };

        return (
            <>
                <StInputText onChange={handleChangeInput} placeholder="Agregar tarea" value={title}/>
                <StButtonAdd onClick={handleSubmit} className="add">
                    Agregar
                </StButtonAdd>
            </>
        );
}

export default Form;
