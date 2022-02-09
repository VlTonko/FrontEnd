import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {NotificationContextProvider} from "./NotificationContent";

ReactDOM.render(
    <React.StrictMode>
        <NotificationContextProvider>
            <App />
        </NotificationContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
