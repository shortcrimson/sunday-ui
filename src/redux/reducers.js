import { combineReducers } from 'redux';

import { ADD_PROJECT, ADD_TASK } from './actions';

function projectListUpdate(state = [], action) {
	switch (action.type) {
		case ADD_PROJECT:
			return [
				...state,
				{
					name: action.project.name,
					_id: action.project._id
				}
			];
		default:
			return state;
	}
}

function taskListUpdate(state = [], action) {
	switch(action.type) {
		case ADD_TASK:
			return [
				...state,
				{
					description: action.task.description,
					_id: action.task._id
				}
			];
		default:
			return state;
	}
}

const projectApp = combineReducers({
	projects: projectListUpdate,
	tasks: taskListUpdate
});

export default projectApp;