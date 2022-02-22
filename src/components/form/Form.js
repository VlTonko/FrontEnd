import React, {useState} from 'react';
import './Form.css';

const Form = ({addTodo, addNotify}) => {
    const [title, setTitle] = useState("");
    const handleChangeInput = e => setTitle( e.target.value );

    const addTolist = async task => {
        const newTodo = { id: Date.now(), title: task, completed: false };
        addTodo(newTodo);
        addNotify({message: `Task ${task} was added successfully`});
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
