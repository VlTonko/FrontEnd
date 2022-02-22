import React from 'react';
import {StNotification} from "./StNotification";

const Notification = ({notify, clearNotification}) => {
    console.log('notifyNot', notify);
    const {type, message} = notify;
    React.useEffect(() => {
        if (type) {
            setTimeout(()=> {
                clearNotification();
            }, 2000)
        }
    }, [type])
    return type ?
        <StNotification isSuccess={type === "success"}>
            <p>{message}</p>
        </StNotification> : null
};

export default Notification;