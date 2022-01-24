import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
    }

    handleChangeInput = e => this.setState({ title: e.target.value });

    handleSubmit = () => {
        this.state.title && this.props.addTolist(this.state.title);
        this.setState({ title: '' });
    };

    render() {
        return (
            <div className="inputField">
                <input
                    className="inputText"
                    onChange={this.handleChangeInput}
                    placeholder="
Agregar tarea"
                    value={this.state.title}
                ></input>
                <button onClick={this.handleSubmit} className="add">
                    {' '}
                    Agregar{' '}
                </button>
            </div>
        );
    }
}

export default Form;
