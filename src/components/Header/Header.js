import React from 'react';
import {RegistrContext} from "../../RegistrContext";
import Button from "../Button/Button";

const Header = () => {
    const { login, clearLogin } = React.useContext(RegistrContext);

    const handleSubmit = (login) => {
        clearLogin();
    }

    return (
        <div>
            {!login ? <p>Please SignIn</p> :
                <div>
                    <p>Welcome dear {login}</p>
                    <Button onClick = {handleSubmit} contentKey="Logout"/>
                </div>}
        </div>
    );
};

export default Header;


