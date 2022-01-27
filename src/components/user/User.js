import React from 'react';

const UserTable = props => {
    const user = props.user;
    return (
        <tr>
            <td data-label="id">{user.id}</td>
            <td data-label="name">{user.name}</td>
            <td data-label="username">{user.username}</td>
            <td data-label="email">{user.email}</td>

            <td data-label="address">
                city: {user.address.city} <br /> street: {user.address.street} <br /> suite: {user.address.suite}
            </td>
            <td data-label="company">company: {user.company.name}</td>

            <td data-label="phone">{user.phone}</td>
            <td data-label="website">{user.website}</td>
        </tr>
    );
};

export default UserTable;
