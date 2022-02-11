import React from 'react';
import {RegistrContext} from "../../RegistrContext";
import Button from "../Button/Button";
import {StHead} from "./StHeader"

const Header = () => {
    const { login, clearLogin } = React.useContext(RegistrContext);

    const handleSubmit = (login) => {
        clearLogin();
    }

    return (
        <>
            {!login ? <p>Please SignIn</p> :
                <StHead>
                    <p>Welcome dear {login}</p>
                    <Button onClick = {handleSubmit} contentKey="Logout"/>
                </StHead>}
        </>
    );
};

export default Header;


