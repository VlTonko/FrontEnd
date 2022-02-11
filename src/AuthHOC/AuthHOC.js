import React, {useContext} from 'react';
import {RegistrContext} from "../RegistrContext";
import {Navigate } from "react-router";

// eslint-disable-next-line react/display-name
const checkAuth = (Component) => (props) => {
    const { login } = useContext(RegistrContext);
    console.log(login);
    return login
        ? <Component {...props}/>
        : <Navigate  to="/" />;
};

export default checkAuth;