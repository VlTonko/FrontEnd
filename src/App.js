import React from 'react';
import axios from 'axios';
import TodoList from './components/todolist/TodoList';
import Form from './components/form/Form';
import Image from './components/imageEl/Image';
import ImagesWing from './components/images/Images';
import './App.css';
import URLTODO from './constants/urlTodo';
import logo from './image/chicho.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }

    componentDidMount() {
        this.queryTodo();
    }

    queryTodo = async () => {
        try {
            const { data } = await axios.get(`${URLTODO}?_limit=5`);
            this.setState({ todos: data });
        } catch (error) {
            return false;
        }
    };

    addTolist = async task => {
        const newTodo = { id: Date.now(), title: task, completed: false };
        try {
            await axios.post(`${URLTODO}`, newTodo);
        } catch (error) {
            return false;
        }
        this.setState({ todos: [...this.state.todos, newTodo] });
    };

    delTodo = async id => {
        try {
            axios.delete(`${URLTODO}/${id}`);
        } catch (error) {
            return false;
        }
        this.setState({ todos: this.state.todos.filter(el => el.id !== id) });
    };

    toggleTodo = id => {
        this.setState({ todos: this.state.todos.map(el => (el.id === id ? { ...el, completed: !el.completed } : el)) });
    };

    render() {
        return (
            <div className="wrapper">
                <Image className={'titleImg'} src={logo} alt={logo} />
                <h1 className="titleTodo">¡Haz negocios con nosotros!</h1>
                <Form addTolist={this.addTolist} />
                <TodoList todos={this.state.todos} delTodo={this.delTodo} onToggle={this.toggleTodo} />
                <ImagesWing />
            </div>
        );
    }
}

export default App;
