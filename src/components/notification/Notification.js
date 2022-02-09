import React from 'react';
import {StNotification} from "./StNotification";

const Notification = ({message, type}) => {
    return (
        <StNotification isSuccess={type === "success"}>
            <p>{message}</p>
        </StNotification>
    );
};

export default Notification;