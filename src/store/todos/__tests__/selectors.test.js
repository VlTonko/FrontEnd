import {selectorTodos} from '../selectors';
import {initialState} from "../reducer";

describe('selectors', () => {
    it('should provide the initial state', () => {
        expect(selectorTodos( {todos: initialState})).toEqual([])
    });
    it('should provide the initial state', () => {
        expect(selectorTodos({todos: {}})).toEqual(undefined)
    });
});