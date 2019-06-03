import { connect } from 'react-redux';
import Header from './Header';
import { openModal } from '../../actions/modal';
import { jwt_check, logout } from '../../actions/users';

const mapStateToProps = (state) => {
  return {
    isLogedIn: state.user["isLogedIn"]
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    openModal: () => dispatch(openModal()),
    checkAuth: () => dispatch(jwt_check()),
    handleLogout: (target) => dispatch(logout(target))
  }
}

export default connect(mapStateToProps, mapDispatchToState)(Header);