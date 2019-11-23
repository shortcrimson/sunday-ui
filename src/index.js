import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import "bootstrap/dist/css/bootstrap.css";

import App from './components/App';

import projectApp from './redux/reducers';
import { addProject } from './redux/actions';

const store = createStore(projectApp);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

const unsub = store.subscribe(() => console.log(store.getState()));

fetch('/projects')
.then(res => res.json())
.then(res => res.forEach(prj => store.dispatch(addProject(prj.name))));


// unsub();
