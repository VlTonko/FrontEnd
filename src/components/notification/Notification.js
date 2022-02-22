import React from 'react';
import {StNotification} from "./StNotification";
import {useDispatch, useSelector} from "react-redux";
import {selectorNotify} from "../../store/notify/selectors";
import {showNotification} from "../../store/notify/actions";

const Notification = () => {
    const dispatch = useDispatch();


    return (
        <StNotification>
            <p></p>
        </StNotification>
    );
};

export default Notification;