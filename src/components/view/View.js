import React, {useState} from 'react';
import {StApp} from "../../StApp";
import Notification from "../notification";
import Image from "../imageEl/Image";
import logo from "../image/chicho.png";
import Form from "../form";
import TodoList from "../todolist";
import ImagesWing from "../images/Images";
import {darkTheme, GlobalStyles, lightTheme} from "../../constants/themes";
import {ThemeProvider} from "styled-components";
import ButtonTheme from "../button/Button";

const View = ({ theme, changeTheme }) => {
    console.log(theme)

    const themeToggler = () => {
        changeTheme(theme === "light" ? 'dark' : 'light');
    }

    return (
        <ThemeProvider theme = {theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StApp>
                <Notification />
                <button onClick = {() => themeToggler()}>Change Theme</button>
                <ButtonTheme theme={theme} changeTheme={changeTheme}>Change Theme</ButtonTheme>
                <Image className={'titleImg'} src={logo} alt={logo} />
                <h1 className="titleTodo">¡Haz negocios con nosotros!</h1>
                <Form />
                <TodoList />
                <ImagesWing />
            </StApp>
        </ThemeProvider>
    );
};

export default View;