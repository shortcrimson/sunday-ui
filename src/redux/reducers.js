import { combineReducers } from 'redux';

import * as actions from './actions';

function loginUpdate(state = false, action) {
	switch(action.type) {
		case actions.SET_LOGIN:
			return action.isLoggedIn;
		default:
			return state;
	}
}

function projectListUpdate(state = [], action) {
	switch (action.type) {
		case actions.ADD_PROJECT:
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
		case actions.ADD_TASK:
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
	isLoggedIn: loginUpdate,
	projects: projectListUpdate,
	tasks: taskListUpdate
});

export default projectApp;