import React from 'react';
import {StNotification} from "./StNotification";
import {useSelector} from "react-redux";
import {selectorNotify} from "../../store/notify/selectors";

const Notification = () => {
    const notify = useSelector(selectorNotify);

    return (
        <StNotification isSuccess = {type === "success"}>
            <p>{message}</p>
        </StNotification>
    );
};

export default Notification;