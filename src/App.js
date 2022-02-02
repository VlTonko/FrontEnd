import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/todolist/TodoList';
import Form from './components/form/Form';
import Image from './components/imageEl/Image';
import ImagesWing from './components/images/Images';
import './App.css';
import URLTODO from './constants/urlTodo';
import logo from './components/image/chicho.png';
import {StWrap} from "./components/styled";


export function App () {
    const [todos, setTodos] = useState([]);

    const queryTodo = async () => {
        try {
            const { data } = await axios.get(`${URLTODO}?_limit=5`);
            setTodos([...todos, ...data] );
        } catch (error) {
            return false;
        }
    };

    useEffect(()=>{ queryTodo()},[]);

    const addTolist = async (task) => {
        const newTodo = { id: Date.now(), title: task, completed: false };
        try {
           await axios.post(`${URLTODO}`, newTodo);
        } catch (error) {
            return false;
        }
        setTodos([...todos, newTodo]);
    };

    const delTodo = async (id) => {
        try {
            await axios.delete(`${URLTODO}/${id}`);
        } catch (error) {
            return false;
        }
        setTodos( todos.filter(el => el.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos( todos.map(el => (el.id === id ? { ...el, completed: !el.completed } : el)) );
    };

    return (
        <StWrap>
            <Image src={logo} alt={logo} />
            <h1 className="titleTodo">¡Haz negocios con nosotros!</h1>
            <Form addTolist={addTolist} />
            <TodoList todos={todos} delTodo={delTodo} onToggle={toggleTodo} />
            <ImagesWing />
        </StWrap>
    )
}

export default App;
