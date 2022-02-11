import React, {useContext} from 'react';
import {Link, Outlet} from 'react-router-dom';
import Header from "../Header/Header";
import {RegistrContext} from '../../RegistrContext'
import NotePage from "../../Pages/NotPage/NotePage";
import SignIn from "../../Pages/SignIn/SignIn";

const Layout = () => {
    const { login } = useContext(RegistrContext);

    return (
        <div>
            <Header/>
            {(login) ? <Outlet/> : <SignIn/> }
        </div>
    );
};

export default Layout;