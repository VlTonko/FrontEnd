import React, {useState} from "react";

const Context = React.createContext();

const RegistrContextProvider = ({children}) => {
    const [login, setLogin] = useState('');
    const [news, setNews] = useState ([]);

    const addLogin = (login) => {
        setLogin(login);
    }

    const clearLogin = () => {
        setLogin('');
    }

    const addNews = (queryNews) => {
        setNews(queryNews);
    }

    return (
        <Context.Provider value={ {login: login, addLogin, clearLogin, news, addNews }}>
            {children}
        </Context.Provider>
    );
}

export {RegistrContextProvider, Context as RegistrContext}