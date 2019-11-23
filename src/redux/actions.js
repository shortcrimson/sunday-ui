//Action types
export const ADD_PROJECT = 'ADD_PROJECT';
export const ADD_TASK = 'ADD_TASK';
export const SET_LOGIN = 'SET_LOGIN';

//Action function definitions
export function addProject(project) {
	return { type: ADD_PROJECT, project };
}

export function addTask(task) {
	return { type: ADD_TASK, task };
}

export function setLogin(isLoggedIn) {
	return { type: SET_LOGIN, isLoggedIn };
}