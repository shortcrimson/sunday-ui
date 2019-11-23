//Action types
export const ADD_PROJECT = 'ADD_PROJECT';

//Action function definitions
export function addProject(projectName) {
	return { type: ADD_PROJECT, projectName };
}