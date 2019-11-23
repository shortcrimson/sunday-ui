import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import "bootstrap/dist/css/bootstrap.css";

import AppControl from './components/App/AppControl';

import projectApp from './redux/reducers';
import { addProject, addTask } from './redux/actions';

const store = createStore(projectApp);

setInitialState(store);

ReactDOM.render(
	<Provider store={store}>
		<AppControl />
	</Provider>,
	document.getElementById('root')
);

function setInitialState() {

	fetch('/projects')
	.then(res => res.json())
	.then(res => res.forEach(prj => store.dispatch(addProject(prj))));

	fetch('/tasks')
	.then(res => res.json())
	.then(res => res.forEach(task => store.dispatch(addTask(task))));
}

// const unsub = store.subscribe(() => console.log(store.getState()));
// unsub();
