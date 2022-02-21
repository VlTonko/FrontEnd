import React, { useContext } from 'react';
import TodoList from './components/todolist/TodoList';
import Form from './components/form/Form';
import Image from './components/imageEl/Image';
import ImagesWing from './components/images/Images';
import './App.css';
import logo from './components/image/chicho.png';
import Notification from "./components/notification/Notification";
import {NotificationContext} from "./NotificationContent";


const App = () => {
    const {notification} = useContext(NotificationContext);

        return (
            <>
                { notification.type && <Notification message={notification.message} type={notification.type} />}
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
