import reducerTodos from '../reducer';
import {ADD_TODO, DELETE_TODO, COMPLETED_TODO} from "../actionTypes";

describe('reducer', () => {
    it('should provide the initial state', () => {
        expect(reducerTodos(undefined, {})).toEqual({todos: []});
    });
    it('should handle ADD_TODO action', () => {
        expect(reducerTodos({todos: []},
            {type: ADD_TODO, payload: {id: 22, title: 'task', completed: false}})).toEqual({"todos": [{"completed": false, "id": 22, "title": "task"}]});
    });
    it('should handle ADD_NOTIFICATION action', () => {
        expect(reducerTodos({todos: [{id: 22, title: 'task', completed: false}]},
            {type: DELETE_TODO, payload: 22})).toEqual({todos: []});
    });
    it('should handle COMPLETED_TODO action', () => {
        expect(reducerTodos({todos: [{id: 22, title: 'task', completed: false}]},
            {type: COMPLETED_TODO, payload: 22})).toEqual({"todos": [{"completed": true, "id": 22, "title": "task"}]});
    });
});