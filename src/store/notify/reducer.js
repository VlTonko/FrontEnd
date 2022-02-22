import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from "./actionTypes";

export const initialState = { notification: {type: '', message: ''}};

const notificationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_NOTIFICATION:
            return {notification: {type: payload.type || "success", message: payload.message}};
        case DELETE_NOTIFICATION:
            return initialState;
        default:
            return state;
    }
};

export default notificationReducer;

