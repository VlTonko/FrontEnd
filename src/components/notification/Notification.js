import React from 'react';
import {StNotification} from "./StNotification";
import {useSelector} from "react-redux";
import {selectorNotify} from "../../store/notify/selectors";


const Notification = () => {
    const notify = useSelector(selectorNotify);
    console.log('notifyNot', notify);

    return (
        <StNotification isSuccess={notify.type === "success"}>
            <p>{notify.message}</p>
        </StNotification>
    );
};

export default Notification;