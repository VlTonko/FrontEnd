import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import TodoList from './components/todolist/TodoList';
import Form from './components/form/Form';
import Image from './components/imageEl/Image';
import ImagesWing from './components/images/Images';
import './App.css';
import URLTODO from './constants/urlTodo';
import logo from './components/image/chicho.png';
import Notification from "./components/notification/Notification";
import {NotificationContext} from "./NotificationContent";

const App = () => {
    const [state, setState] = useState({
        todos: [],
        isLoading: false,
    });

    useEffect(() => {
        queryTodo();
    },[]);

    const {notification, showNotification} = useContext(NotificationContext);
    // console.log(showNotification);

    const queryTodo = async () => {
        try {
            setState({...state, isLoading: true});
            const {data} = await axios.get(`${URLTODO}?_limit=5`);
            setState({isLoading: false, todos: data});
        } catch (error) {
            setState({...state, isLoading: false});
        }
    };

    const addTolist = async task => {
        const newTodo = { id: Date.now(), title: task, completed: false };
        try {
            await axios.post(`${URLTODO}`, newTodo);
            //console.log(showNotification);
            showNotification({type: "success", message: `Task ${task} was added successfully`})
            // console.log(notification);
            setState( {...state, todos: [...state.todos, newTodo]});
        } catch (error) {
            showNotification({type: "fail", message: `Task was not added`})
            return false;
        }

    };

    const delTodo = async id => {
        try {
            await axios.delete(`${URLTODO}/${id}`);
            setState({...state, todos: state.todos.filter(el => el.id !== id)});
        } catch (error) {
            return false;
        }
    };

    const toggleTodo = id => {
        setState( {...state, todos: state.todos.map(el => (el.id === id ? { ...el, completed: !el.completed } : el))});
    };

        return (
            <>
                { notification.type && <Notification message={notification.message} type={notification.type} />}
                    <div className="wrapper">
                        <Image className={'titleImg'} src={logo} alt={logo} />
                        <h1 className="titleTodo">¡Haz negocios con nosotros!</h1>
                        <Form addTolist={addTolist} />
                        <TodoList todos={state.todos} delTodo={delTodo} onToggle={toggleTodo} />
                        <ImagesWing />
                    </div>
            </>


        );
}

export default App;
