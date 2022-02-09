import React, { useState } from 'react';
import './Form.css';

const Form = ({addTolist}) => {
    // constructor(props) {
    //     super(props);
    //     this.state = { title: '' };
    // }
    const [title, setTitle] = useState("");

    const handleChangeInput = e => setTitle( e.target.value );

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
