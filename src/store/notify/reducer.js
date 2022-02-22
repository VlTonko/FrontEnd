import { ADD_NOTIFICATION, DELETE_NOTIFICATION, SHOW_NOTIFICATION } from "./actionTypes";

const initialState = { notification: {type: '', message: ''}};

const notificationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_NOTIFICATION:
            return {notification: {type: payload.type || "success", message: payload.message}};
        case DELETE_NOTIFICATION:
            return initialState;
        case SHOW_NOTIFICATION:
            return {notification: {type: payload.type || "success", message: payload.message}};

        default:
            return state;
    }
};

export default notificationReducer;

