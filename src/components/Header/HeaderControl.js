import { connect } from 'react-redux';

import { setLogin } from '../../redux/actions';

import Header from './Header';

const mapStateToProps = (state, ownProps) => {
	return {
		isLoggedIn: state.isLoggedIn
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onLoginClick: () => {
			dispatch(setLogin(true));
		},
		onLogoutClick: () => {
			dispatch(setLogin(false));
		}
	};
}

const HeaderControl = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderControl;
