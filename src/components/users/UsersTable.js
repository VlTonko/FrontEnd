import React from 'react';
import UserTable from '../user/User';
import './UsersTable.scss';

const UsersTable = props => {
    const users = props.users;
    return (
        <div className="table-data">
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>address</th>
                        <th>company</th>
                        <th>phone</th>
                        <th>website</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => {
                        return <UserTable user={user} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
