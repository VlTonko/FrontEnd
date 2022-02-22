import {selectorNotify} from '../selectors';
import {initialState} from "../reducer";

describe('selectors', () => {
    it('should provide the initial state', () => {
        expect(selectorNotify({ notify: {notification: {initialState}} })).toEqual({})
    });
    it('should provide the initial state', () => {
        expect(selectorNotify({notify: {}})).toEqual(undefined)
    });
});