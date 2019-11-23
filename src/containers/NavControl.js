import { connect } from 'react-redux';

import ProjectNav from '../components/ProjectNav';

const mapStateToProps = (state, ownProps) => {
	return {
		projects: state.projects
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
}

const NavControl = connect(mapStateToProps, mapDispatchToProps)(ProjectNav);

export default NavControl;