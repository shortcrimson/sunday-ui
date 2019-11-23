import { combineReducers } from 'redux';

import { ADD_PROJECT } from './actions';

function projectListUpdate(state = [], action) {
	switch (action.type) {
		case ADD_PROJECT:
			return [
				...state,
				{
					name: action.projectName
				}
			];
		default:
			return state;
	}
}

const projectApp = combineReducers({
	projects: projectListUpdate
});

export default projectApp;