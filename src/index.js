import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RegistrContextProvider} from "./RegistrContext";

ReactDOM.render(
    <React.StrictMode>
        <RegistrContextProvider>
            <App />
        </RegistrContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
