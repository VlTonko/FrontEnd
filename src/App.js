import React, { useContext } from 'react';
import TodoList from './components/todolist';
import Form from './components/form';
import Image from './components/imageEl/Image';
import ImagesWing from './components/images/Images';
import './App.css';
import logo from './components/image/chicho.png';
import Notification from "./components/notification";

const App = () => {
        return (
            <>
                    <Notification />
                    <div className="wrapper">
                        <Image className={'titleImg'} src={logo} alt={logo} />
                        <h1 className="titleTodo">¡Haz negocios con nosotros!</h1>
                        <Form />
                        <TodoList />
                        <ImagesWing />
                    </div>
            </>
        );
}

export default App;
