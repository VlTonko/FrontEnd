import notificationReducer, {initialState} from '../reducer';
import {ADD_NOTIFICATION, DELETE_NOTIFICATION} from "../actionTypes";

describe('reducer', () => {
    it('should provide the initial state', () => {
        expect(notificationReducer(undefined, {})).toEqual(initialState);
    });
    it('should handle ADD_NOTIFICATION action', () => {
        expect(notificationReducer(initialState,
            {type: ADD_NOTIFICATION, payload: {message: 'Todo was added'}})).toEqual({"notification": {"message": "Todo was added", "type": "success"}});
    });
    it('should handle DELETE_NOTIFICATION action', () => {
        expect(notificationReducer({"notification": {"message": "Todo was added", "type": "success"}}, {type: DELETE_NOTIFICATION})).toEqual(initialState);
    });
});