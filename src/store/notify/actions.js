import {ADD_NOTIFICATION, DELETE_NOTIFICATION, SHOW_NOTIFICATION} from './actionTypes';

export const addNotification = (payload) => ({type: ADD_NOTIFICATION, payload});
export const deleteNotification = (payload) => ({type: DELETE_NOTIFICATION, payload});
export const showNotification = (payload) => ({type: SHOW_NOTIFICATION, payload});
