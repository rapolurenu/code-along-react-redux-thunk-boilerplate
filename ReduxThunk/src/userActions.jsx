import { createAction } from 'redux-actions';

export const LOAD_USERS = "LOAD_USERS";
export const FETCH_ERROR = "FETCH_ERROR";

export const loadUsers = createAction(LOAD_USERS);
export const fetchError = createAction(FETCH_ERROR);
