import { SHOW_NOTIFICATION } from "./actionTypes";

const initialState = { notification: {type: '', message: ''}};

const notificationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_NOTIFICATION:
            return {...state, notification: {type: payload.type || "success", message: payload.message}};
        default:
            return state;
    }
};

export default notificationReducer;

