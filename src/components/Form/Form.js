import React, {useState, useContext} from 'react';
import Input from '../Input/Input';
import Button from "../Button/Button";
import {RegistrContext} from "../../RegistrContext";

const Form = () => {
    const [title, setTitle] = useState("");
    const { addLogin } = useContext(RegistrContext);

    const handleChangeInput = e => setTitle( e.target.value );

    const handleSubmit = () => {
        if (title) {
            addLogin(title);
        }
        setTitle( '' );
        navigate('/news')
    }

    return (
        <div>
            <h3>SignIn</h3>
            <Input onChange = {handleChangeInput} value={title}/>
            <Button onClick = {handleSubmit} contentKey="SUBMIT"/>
        </div>
    )
};

export default Form;