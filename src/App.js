import React, { useContext } from 'react';
import TodoList from './components/todolist/TodoList';
import Form from './components/form/Form';
import Image from './components/imageEl/Image';
import ImagesWing from './components/images/Images';
import './App.css';
import logo from './components/image/chicho.png';
import Notification from "./components/notification/Notification";
import {useSelector} from "react-redux";
import {selectorNotify} from "./store/notify/selectors";

const App = () => {
    const notify = useSelector(selectorNotify);

        return (
            <>
                { notify.type && <Notification />}
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
