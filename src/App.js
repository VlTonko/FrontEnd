import React from 'react';
import axios from 'axios';
import TodoList from './components/todolist/TodoList';
import Form from './components/form/Form';
import Image from './components/imageEl/Image';
import './App.css';
import URLTODO from './constants/urlTodo';
import logo from './image/chicho.png';
import wing from './image/wing.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }

    componentDidMount() {
        this.querytodo();
    }

    querytodo = async () => {
        try {
            const { data } = await axios.get(`${URLTODO}?_limit=5`);
            this.setState({ todos: data });
        } catch (error) {
            return false;
        }
    };

    addTolist = task => {
        this.setState({ todos: [...this.state.todos, { id: Date.now(), title: task, completed: false }] });
        axios({
            method: 'POST',
            url: `${URLTODO}`,
            params: { id: Date.now(), title: task, completed: false },
        }).then(response => {
            console.log(response.data);
        });
    };

    delTodo = id => {
        this.setState({ todos: this.state.todos.filter(el => el.id !== id) });
        axios.delete(`${URLTODO}/${id}`).then(response => {
            console.log(response);
        });
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
                <div className="imagesWing">
                    <Image className={'wingImgTwo'} src={wing} alt={wing} />
                    <Image className={'wingImgOne'} src={wing} alt={wing} />
                    <Image className={'wingImgTwo'} src={wing} alt={wing} />
                    <Image className={'wingImgOne'} src={wing} alt={wing} />
                    <Image className={'wingImgTwo'} src={wing} alt={wing} />
                    <Image className={'wingImgTwo'} src={wing} alt={wing} />
                </div>
            </div>
        );
    }
}

export default App;
