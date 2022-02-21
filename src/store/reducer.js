import reducerNotify from './notify/reducer';
import reducerTodos from './todos/reducer';
import reducerTheme from './theme/reducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    todos: reducerTodos,
    notify: reducerNotify,
    theme: reducerTheme,
});

export default rootReducer;

