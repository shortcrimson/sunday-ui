import { connect } from 'react-redux';

import ProjectNav from './ProjectNav';

const mapStateToProps = (state, ownProps) => {
	return {
		projects: state.projects,
		tasks: state.tasks
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
}

const NavControl = connect(mapStateToProps, mapDispatchToProps)(ProjectNav);

export default NavControl;