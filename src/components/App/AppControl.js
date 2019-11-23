import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = (state, ownProps) => {
	return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
}

const AppControl = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppControl;