import React, {useState, useContext} from 'react';
import Input from '../Input/Input';
import Button from "../Button/Button";
import {RegistrContext} from "../../RegistrContext";
import { useNavigate } from "react-router-dom";
import {StForm} from "./StForm";

const Form = () => {
    let navigate = useNavigate();
    const [title, setTitle] = useState("");
    const { addLogin } = useContext(RegistrContext);

    const handleChangeInput = e => setTitle( e.target.value );

    const handleSubmit = () => {
        if (title) {
            addLogin(title);
            setTitle( '' );
            navigate('/news')
        }

    }

    return (
        <StForm>
            <h3>SignIn</h3>
            <Input onChange = {handleChangeInput} value={title}/>
            <Button onClick = {handleSubmit} contentKey="SUBMIT"/>
        </StForm>
    )
};

export default Form;