import {CHANGE_THEME} from "./actionTypes";

export const initialState = {theme: 'light'}

const reducerTheme = (state = initialState, {type, payload}) => {
    switch (type) {
        case CHANGE_THEME:
            return {theme: (state.theme.theme === payload)}
        default:
            return state;
    }
};

export default reducerTheme;