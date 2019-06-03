import { connect } from 'react-redux';
import Form from './Form';
import { login } from '../../../actions/users';

const mapStateToProps = (state) => {
  return {
    isFetching: state.user.isFetching,
    errorMessage: state.user.loginError
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    handleSubmit: (target) => dispatch(login(target))
  }
}

export default connect(mapStateToProps, mapDispatchToState)(Form);