import React, {useState} from 'react';
import {StButton} from "./StButton";

const ButtonTheme = ({ theme, changeTheme }) => {
    console.log(theme)

    const themeToggler = () => {
        changeTheme(theme === "light" ? 'dark' : 'light');
    }


    return <StButton onClick = {() => themeToggler()}>Theme</StButton>;
};

export default ButtonTheme;