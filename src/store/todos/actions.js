import {ADD_TODO, DELETE_TODO} from './actionTypes';
import {COMPLETED_TODO} from './actionTypes';

export const addTodo = (payload) => ({type: ADD_TODO, payload});
export const deleteTodo = (payload) => ({type: DELETE_TODO, payload});
export const completedTodo = (payload) => ({type: COMPLETED_TODO, payload});