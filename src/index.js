import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RegistrContextProvider} from "./RegistrContext";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <RegistrContextProvider>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </RegistrContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
