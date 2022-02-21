import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import { store } from './store'
import {NotificationContextProvider} from "./NotificationContent";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <NotificationContextProvider>
                <App/>
            </NotificationContextProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);