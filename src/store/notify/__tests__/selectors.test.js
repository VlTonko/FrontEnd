import {selectorNotify} from '../selectors';
import {initialState} from "../reducer";

describe('selectors', () => {
    it('should provide the initial state', () => {
        expect(selectorNotify({notify: initialState})).toEqual({type: '', message: ''})
    });
    it('should provide the initial state', () => {
        expect(selectorNotify({notify: {}})).toEqual(undefined)
    });
});