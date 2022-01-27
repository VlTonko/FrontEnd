import React from 'react';
import axios from 'axios';
import './App.scss';
import { urlAllUsers } from './constants/url';
import UsersTable from './components/users/UsersTable';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [
                {
                    id: '',
                    name: '',
                    username: '',
                    email: '',
                    address: {
                        street: '',
                        suite: '',
                        city: '',
                        zipcode: '',
                    },
                    phone: '',
                    website: '',
                    company: { name: '' },
                },
            ],
        };
    }

    componentDidMount() {
        this.queryAllUsers();
    }

    queryAllUsers = async () => {
        try {
            const data = await axios.get(`${urlAllUsers}`);
            const allUsers = data.data;
            this.setState({ userData: allUsers });
            console.log('1', allUsers);
        } catch (error) {
            return false;
        }
    };

    render() {
        return (
            <div className="wrapper">
                <h1 className="titleTable">Lista de los mejores trabajadores!</h1>
                <UsersTable users={this.state.userData} />
            </div>
        );
    }
}

export default App;
